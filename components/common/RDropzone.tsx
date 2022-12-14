import Image from "next/image";
import { FC, useCallback } from "react";
import { FileType, ID } from "../../libraries/types/common";
import { remove as removeElement } from 'lodash';
import { useDropzone } from "react-dropzone";
import { convertFileToFileType } from "../../libraries/utils/helpers/file";

export type RDropzoneData = {
    files: Array<FileType>;
    remove: Array<ID>;
};

const Thumb = ({
    file,
    onClose,
}: {
    file: FileType;
    idx: number;
    onClose?: (file: FileType) => void;
}) => {
    const onRemove = useCallback(() => {
        if (onClose) onClose(file);
    }, [file, onClose]);
    return (
        <div className={'r-drop-thumb-item relative'}>
            <div className="absolute right-1 top-1 rounded-full  w-6 h-6 flex justify-center items-center bg-main-weighted text-white hover:bg-main-dark cursor-pointer"
              onClick={onRemove}
            >
              <div>
                X
              </div>
            </div>
            <Image src={file.url} alt="" width={100} height={100} className="rounded-lg" />
        </div>
    );
};

const RDropzone = ({
    dropzonClassName = '',
    dropzonLabel = '',
    maxFiles = 3,
    onChange,
    // initialValue = { files: [], remove: [] },
    files = [],
    remove = [],
}: {
    dropzonClassName?: string;
    dropzonLabel?: string;
    maxFiles?: number;
    onChange?: (files: RDropzoneData) => void;
    // initialValue?: RDropzoneData;
    files: FileType[];
    remove: ID[];
}) => {
    const onDrop = useCallback(
        (acceptedFiles: any) => {
            let serializableFiles: FileType[] = acceptedFiles.map((file: File): FileType => {
                const serializableFile: FileType = convertFileToFileType(file);
                return serializableFile;
            });

            removeElement(serializableFiles, ({file: file1, url: url1}) => {
                return files.find(
                    ({file: file2, url: url2}) => {
                        if (!file1) {
                            return url1 === url2
                        }
                        if (!file2) return false;
                        return (
                            file1.type === file2.type,
                            file1.name === file2.name &&
                                file1.size === file2.size &&
                                file1.lastModified === file2.lastModified
                        );
                    }
                );
            });
            if (files.length + serializableFiles.length > maxFiles) {
                // tempFiles = [...files, ...tempFiles].slice(-maxFiles);
                return;
            }
            if (onChange) {
                onChange({
                    remove: [...remove],
                    files: [...files, ...serializableFiles],
                });
            }
        },
        [files, maxFiles, onChange, remove]
    );

    const { getRootProps, getInputProps } = useDropzone({
        accept: {'image/*': []},
        multiple: true,
        maxFiles: 8,
        onDrop: onDrop,
    });

    const cancelFile = useCallback(
        (file: FileType) => {
            const targetId = files.findIndex(
                (item) => {
                    if (!file.file) {
                        return file.url === item.url;
                    }
                    if (!item.file) return false;
                    return file.file.type === item.file.type &&
                        file.file!.name === item.file!.name &&
                        file.file!.size === item.file!.size &&
                        file.file!.lastModified === item.file!.lastModified
                }
            );
            if (targetId < 0) return;
            const targetFile = files[targetId];
            if (targetFile.id) {
                const existing = remove.find((id: ID) => id === targetFile.id);
                if (!existing) {
                    remove.push(targetFile.id);
                }
            }
            files.splice(targetId);
            if (file.file) {
              URL.revokeObjectURL(file.url);
            }
            if (onChange) onChange({ files: [...files], remove: [...remove] });
        },
        [files, onChange, remove]
    );

    return (
        <>
            <div
              {...getRootProps({
                className: 'r-dropzone ' + dropzonClassName,
              })}
            >
              <div className="uppercase text-main-weighted">{dropzonLabel}</div>
              <input {...getInputProps()} />
            </div>
            <div className='flex gap-x-4'>
                {files.map((file: FileType, idx: number) => (
                    <Thumb
                        file={file}
                        idx={idx}
                        onClose={cancelFile}
                        key={idx}
                    />
                ))}
            </div>
        </>
    );
};
export default RDropzone;
