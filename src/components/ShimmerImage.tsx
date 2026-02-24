import { useState } from "react";
import { cn } from "@/lib/utils";

interface ShimmerImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const ShimmerImage = ({ className, wrapperClassName, alt, ...props }: ShimmerImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-background/60 to-transparent" />
        </div>
      )}
      <img
        {...props}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ShimmerImage;
