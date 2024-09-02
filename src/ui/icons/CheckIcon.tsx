import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Icon } from "./Icon"

type CheckIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const CheckIcon: FC<CheckIconProps> = (props) => {
  return <Icon name="check" {...props} />
}
