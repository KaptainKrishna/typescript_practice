import type { FC } from "react";

interface AvatarInterface {
  img?: string;
  title?: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const Avatar: FC<AvatarInterface> = ({
  img,
  title,
  subtitle = "subtitle missing",
  titleColor = "#000",
  subtitleColor = "#ddd",
}) => {
  return (
    <div className="flex gap-3 items-center">
      {img && (
        <img
          src={img}
          alt="img"
          className="w-12 h-12 rounded-full object-cover border border-white"
        />
      )}
      {title && subtitle && (
        <div className="flex flex-col">
          <h1
            className="text-lg/6 font-medium"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          <label
            className="text-sm font-medium"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </label>
        </div>
      )}
    </div>
  );
};

export default Avatar;
