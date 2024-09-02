import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

interface BellIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withBage?: boolean;
}

export const BellIcon: FC<BellIconProps> = ({ withBage, ...props }) => {
  return <Icon name="bell" withBadge={withBage} {...props} />
}
