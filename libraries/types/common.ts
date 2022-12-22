export type ID = string | number;

export type FileType = {
  id?: ID;
  file?: File;
  url: string;
};

export type Pager<T = {}> = T & {
  page?: number;
  size?: number;
  sort?: string;
  dir?: 'asc' | 'desc';
};
