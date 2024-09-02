import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

type BurgerIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const BurgerIcon: FC<BurgerIconProps> = (props) => {
  return <Icon name="burger" {...props} />
}
