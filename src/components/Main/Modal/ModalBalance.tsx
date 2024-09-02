import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { selectBalance } from "../../../store/features/balance"
import { useAppSelector } from "../../../store/hooks"
import { Text } from "../../../ui"

type ModalBalanceProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ModalBalance: FC<ModalBalanceProps> = ({ className, ...props }) => {
  const { balance } = useAppSelector(selectBalance);
  return (
    <div className={`modal-balance${className ? ` ${className}` : ''}`} {...props}>
      <Text
        className="modal-balance__text"
        variant="text"
        text="Current Balance:"
      />
      <Text
        className="modal-balance__balance"
        variant="text"
        text={`$ ${balance}`}
      />
    </div>
  )
}
