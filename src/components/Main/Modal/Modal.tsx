import { FC, memo } from "react"

import { Button, Title } from "../../../ui";
import { ChevronLeft, CloseIcon } from "../../../ui/icons";
import { ModalBalance } from "./ModalBalance";
import { ModalSelect } from "./ModalSelect";
import { ModalAmount } from "./ModalAmount";
import { PromoCodeForm } from "../PromoCode";

interface ModalProps {
  closeHandler: () => void;
}

const ModalWidget: FC<ModalProps> = ({ closeHandler }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__headline" onClick={closeHandler}>
          <div className="modal__headline--left">
            <ChevronLeft className="modal__chevron" />
            <Title
              className="modal__title"
              variant="h3"
              text="Back to Payment Methods"
            />
          </div>
          <CloseIcon className="modal__close-icon" />
        </div>
        <ModalBalance className="modal__balance" />
        <ModalSelect className="modal__select" />
        <ModalAmount className="modal__amount" />
        <div className="modal__promo">
          <Title
            className="modal__promo-title"
            variant="h3"
            text="Promo Code"
          />
          <PromoCodeForm
            className="modal__promo-form"
            isModal={true}
          />
        </div>
        <Button
          className="modal__submit"
          text="Deposit"
          onClick={closeHandler}
        />
      </div>
      <div className="modal__shadow" />
    </div>
  )
}

export const Modal = memo(ModalWidget);
