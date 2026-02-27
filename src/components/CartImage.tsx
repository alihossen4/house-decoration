import Image, { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

type MyImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  className: string;
  onClick:MouseEventHandler<HTMLImageElement>;
  children:React.ReactNode;
};

export default function CartImage({
  src,
  alt,
  width,
  height,
  className,
  onClick,
  children
}: MyImageProps) {
  return (
    <>
      {children}
      <Image src={src} alt={alt} width={width} height={height} className={className} onClick={onClick}/>
    </>

);
}