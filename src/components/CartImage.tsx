import Image, { StaticImageData } from "next/image";

type MyImageProps = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export default function MyImage({
  src,
  alt,
  width,
  height,
}: MyImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}