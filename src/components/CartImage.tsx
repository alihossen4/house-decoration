import Image, { StaticImageData } from "next/image";

type MyImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  children:React.ReactNode;
  className: string
};

export default function MyImage({
  src,
  alt,
  width,
  height,
  children,
  className
}: MyImageProps) {
  return (
    <>
    {children}
    <Image src={src} alt={alt} width={width} height={height} className={className}/>
    </>

);
}