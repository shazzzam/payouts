import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

type FilterIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const FilterIcon: FC<FilterIconProps> = (props) => {
  return <Icon name="filter" {...props} />
}
