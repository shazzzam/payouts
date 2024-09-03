import { DetailedHTMLProps, FC, HTMLAttributes, memo, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { choosePaymentMethod, selectPaymentMethods } from "../../../store/features/paymentMethods";
import { Text } from "../../../ui";

interface DropdownProps extends
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  closeHandler: () => void;
}

const DropdownComponent: FC<DropdownProps> = ({ closeHandler, className, ...props }) => {
  const ref = useRef<HTMLUListElement>(null);
  const { paymentMethods } = useAppSelector(selectPaymentMethods);
  const dispatch = useAppDispatch();

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event?.target as Node | null)) {
      closeHandler()
    }
  }

  const selectHandler = (id: number) => {
    dispatch(choosePaymentMethod(id));
    closeHandler();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  });

  return (
    <ul
      className={`modal-dropdown${className ? ` ${className}` : ''}`}
      ref={ref}
      {...props}
    >
      {paymentMethods.map(method => (
        <li
          className="modal-dropdown__item"
          key={method.id}
          onClick={() => selectHandler(method.id)}
        >
          <div className="modal-dropdown__img-container">
            <img className="modal-dropdown__img" src={method.logoUrl} />
          </div>
          <Text className="modal-dropdown__text" variant="text" text={method.title} />
        </li>
      ))}
    </ul>
  )
}

export const Dropdown = memo(DropdownComponent);
