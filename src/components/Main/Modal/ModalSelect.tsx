import { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { selectPaymentMethods } from "../../../store/features/paymentMethods";
import { Text } from "../../../ui";
import { ChevronDown } from "../../../ui/icons";
import { Dropdown } from "./Dropdown";

type ModalSelectProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ModalSelect: FC<ModalSelectProps> = ({ className, ...props }) => {
  const { activeMethod } = useAppSelector(selectPaymentMethods);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const switchDropdown = () => {
    setIsDropdownOpen(value => !value);
  }

  return (
    <div
      className={`modal-select${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div
        className="modal-select__selected"
        onClick={switchDropdown}
      >
        <div className="modal-select__img-container">
          <img className="modal-select__img" src={activeMethod!.logoUrl} />
        </div>
        <div className="modal-select__text">
          <div className="modal-select__text-top">
            <Text
              className="modal-select__name"
              variant="text"
              text={activeMethod!.title}
            />
            <div className="modal-select__circle" />
            <Text
              className="modal-select__comission"
              variant="text"
              text={`Comission ${activeMethod!.comission}%`}
            />
          </div>
          <Text
            className="modal-select__hint"
            variant="text"
            text="Please notice that you will send money in the USD"
          />
        </div>
        <ChevronDown className="modal-select__chevron" />
      </div>
      {isDropdownOpen && <Dropdown closeHandler={switchDropdown} />}
    </div>
  );
};
