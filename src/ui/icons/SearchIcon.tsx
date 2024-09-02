import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { Icon } from "./Icon"

type SearchIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const SearchIcon: FC<SearchIconProps> = (props) => {
  return <Icon name="search" {...props} />
}
