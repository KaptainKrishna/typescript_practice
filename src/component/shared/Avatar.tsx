import type { FC, ReactNode } from "react";

interface AvatarInterface {
  img?: string;
  title?: string;
  subtitle?: ReactNode;
  titleColor?: string;
  subtitleColor?: string;
  size?: "lg" | "md";
}

const Avatar: FC<AvatarInterface> = ({
  img,
  title,
  subtitle = "subtitle missing",
  titleColor = "#000",
  subtitleColor = "#ddd",
  size = "lg",
}) => {
  return (
    <div className="flex gap-3 items-center">
      {img && (
        <img
          src={img}
          alt="img"
          className={`${size === "lg" ? "w-12 h-12" : "w-8 h-8"} rounded-full object-cover border border-white`}
        />
      )}
      {title && subtitle && (
        <div className="flex flex-col">
          <h1
            className={`${size === "lg" ? "text-lg/4" : "text-sm"} font-medium`}
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          <div style={{ color: subtitleColor }}>{subtitle}</div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
