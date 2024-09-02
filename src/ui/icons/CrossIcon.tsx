import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

type CrossIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CrossIcon: FC<CrossIconProps> = (props) => {
  return <Icon name="cross" {...props} />
}
