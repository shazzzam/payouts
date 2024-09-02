import { DetailedHTMLProps, FC, HTMLAttributes, useContext } from "react"

import { Title, Text } from "../../../ui";
import { PaymentMethodStatusEnum } from "../../../types/types";
import { ModalContext } from "../Main";
import { useAppDispatch } from "../../../store/hooks";
import { choosePaymentMethod } from "../../../store/features/paymentMethods";

interface PaymentMethodCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  logoUrl: string;
  methodId: number;
  title: string;
  comission: number;
  status?: PaymentMethodStatusEnum;
}
export const PaymentMethodCard: FC<PaymentMethodCardProps> = ({
  logoUrl,
  methodId,
  title,
  comission,
  status,
  className,
  ...props
}) => {
  const dispatch = useAppDispatch();

  const { switchModal } = useContext(ModalContext);

  const clickHandler = () => {
    dispatch(choosePaymentMethod(methodId));
    switchModal();
  }

  return (
    <div
      className={`payment-card${className ? ` ${className}` : ''}`}
      onClick={clickHandler}
      {...props}
    >
      {status && (
        <div className={`payment-card__badge payment-card__badge--${status}`}>
          {status.toUpperCase()}
        </div>
      )}
      <div className="payment-card__img-container">
        <img className="payment-card__img" src={logoUrl} />
      </div>
      <div className="payment-card__container">
        <Title
          className="payment-card__title"
          variant="h4"
          text={title}
        />
        <Text
          className="payment-card__text"
          variant="caption"
          text={`Comission ${comission}%`}
        />
      </div>
    </div>
  );
};
