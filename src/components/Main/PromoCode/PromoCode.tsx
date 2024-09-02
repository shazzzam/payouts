import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

import { Title, Text } from "../../../ui";

import { PromoCodeForm } from "./PromoCodeForm";

type PromoCodeProps =
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const PromoCode: FC<PromoCodeProps> = ({ className, ...props }) => {
  return (
    <section
      className={`code-section${className ? ` ${className}` : ''}`}
      {...props}
    >
      <Title
        className="code-section__title"
        variant="h2"
        text="Have a Promo Code?"
      />
      <Text
        className="code-section__hint"
        variant="text"
        text="Enter promo code here. It will activate a special bonus!"
      />
      <PromoCodeForm
        className="code-section__form"
      />
    </section>
  )
};
