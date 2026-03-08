import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type SanityImageSource = {
  asset?: { _id?: string; url?: string; metadata?: { lqip?: string } };
  alt?: string;
};

type SanityImageProps = {
  value: SanityImageSource | Record<string, unknown> | null | undefined;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

export default function SanityImage({
  value,
  width = 800,
  height,
  className,
  priority,
}: SanityImageProps) {
  const hasAsset = value && typeof value === "object" && value !== null && "asset" in value && (value as SanityImageSource).asset;
  if (!hasAsset) return null;

  const url = urlFor(value as Parameters<typeof urlFor>[0])
    .width(width)
    .height(height ?? Math.round(width))
    .url();
  const alt = (value as SanityImageSource).alt ?? "";

  return (
    <Image
      className={className}
      src={url}
      alt={alt}
      width={width}
      height={height ?? Math.round(width)}
      priority={priority}
      placeholder={(value as SanityImageSource)?.asset?.metadata?.lqip ? "blur" : "empty"}
      blurDataURL={(value as SanityImageSource)?.asset?.metadata?.lqip}
    />
  );
}
