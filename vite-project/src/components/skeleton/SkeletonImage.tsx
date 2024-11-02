import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../../lib/utils";
import styles from "./SkeletonImage.module.css";

interface SkeletonImageProps {
  src: string;
  height?: string;
  width?: string;
  className?: string;
}

export default function SkeletonImage({
  src,
  height = "16rem",
  width = "100%",
  className = "",
}: SkeletonImageProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      className={cn(styles.loadable, pulsing ? styles.pulse : "")}
      style={{ width: width, background: "#ccc" }}
    >
      <motion.img
        initial={{ height: "0px", opacity: 0 }}
        animate={{
          height: imageLoading ? height : "auto",
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
        onLoad={imageLoaded}
        src={src}
        className={className}
      />
    </div>
  );
}
