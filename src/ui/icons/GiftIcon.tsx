import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

type GiftIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const GiftIcon: FC<GiftIconProps> = (props) => {
  return <Icon name="gift" {...props} />
}
