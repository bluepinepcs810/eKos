import Image from "next/image";
import React from "react";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src: string,
  alt?: string
}

const Avatar: React.FC<AvatarProps> = ({src, alt, ...rest}) => {
  return (
    <div className="rounded-full" {...rest}>
      <Image src={src} alt={alt || 'unknown avatar'} width={57} height={57} className="rounded-full"/>
    </div>
  )
}

export default Avatar;
