import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { Title } from "../../../ui"
import { PaymentMethodType } from "../../../types/types"

import { PaymentMethodCard } from "./PaymentMethodCard";

interface PaymentMethodsListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  paymentMethods: PaymentMethodType[];
  title: string;
}

export const PaymentMethodsList: FC<PaymentMethodsListProps> = ({
  paymentMethods,
  title,
  className,
  ...props
}) => {
  return (
    <section
      className={`payment-methods${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Title className="payment-methods__title" variant="h3" text={title} />
      <ul className="payment-methods__list">
        {paymentMethods.map(paymentMethod => (
          <li className="payment-methods__item" key={paymentMethod.id}>
            <PaymentMethodCard
              className="payment-methods__card"
              logoUrl={paymentMethod.logoUrl}
              title={paymentMethod.title}
              comission={paymentMethod.comission}
              status={paymentMethod.status}
              methodId={paymentMethod.id}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
