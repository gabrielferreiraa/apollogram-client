import React from "react";

import StyledAvatar from "./Avatar.styles";

const NOT_FOUND_IMAGE =
  "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

interface AvatarProps {
  src?: string | null;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => (
  <StyledAvatar src={src || NOT_FOUND_IMAGE} />
);

export default Avatar;
