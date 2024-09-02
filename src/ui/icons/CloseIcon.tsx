import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

type CloseIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CloseIcon: FC<CloseIconProps> = (props) => {
  return <Icon name="close" {...props} />
}
