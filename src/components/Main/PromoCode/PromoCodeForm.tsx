import { DetailedHTMLProps, FC, FormEvent, HTMLAttributes, useState } from "react";

import { Button, Input } from "../../../ui";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectPromoCode, setPromoCode } from "../../../store/features/promoCode";
import { CheckIcon, CrossIcon } from "../../../ui/icons";

interface PromoCodeFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  isModal?: boolean;
}
export const PromoCodeForm: FC<PromoCodeFormProps> = ({
  className,
  isModal = false,
  ...props
}) => {
  const dispatch = useAppDispatch();

  const { promoCode, isValid } = useAppSelector(selectPromoCode);

  const [value, setValue] = useState<string>(promoCode);

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    const newValue = (event.target as unknown as { value: string }).value;
    setValue(newValue);
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setPromoCode(value));
  }

  return (
    <form
      className={`promo-form${className ? ` ${className}` : ''}${isModal ? " promo-form--modal" : ""}`}
      {...props}
      onSubmit={submitHandler}
    >
      <div className="promo-form__input-wrapper">
        <Input
          onChange={changeHandler}
          value={value}
          placeholder="Enter promo code here"
        />
        {isValid && <CheckIcon
          className="promo-form__input-validator promo-form__input-validator--valid"
        />}
        {isValid === false && <CrossIcon
          className="promo-form__input-validator promo-form__input-validator--invalid"
        />}
      </div>
      <Button
        className="promo-form__btn"
        text="Apply"
        onClick={() => console.log('click')}
      />
    </form>
  )
};
