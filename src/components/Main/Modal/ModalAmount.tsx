import { DetailedHTMLProps, FC, FormEvent, HTMLAttributes, useState } from "react";
import { Button, Input, Text, Title } from "../../../ui";

type ModalAmountProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const buttonsMap = [
  {
    value: 10
  },
  {
    value: 20
  },
  {
    value: 30
  },
  {
    value: 50
  },
  {
    value: 100
  },
]

export const ModalAmount: FC<ModalAmountProps> = ({ className, ...props }) => {
  const [value, setValue] = useState<string>('')

  const addHandler = (add: number) => {
    let currentValue = Number(value);
    if (isNaN(currentValue)) {
      currentValue = 0;
    }

    currentValue += add;

    setValue(currentValue.toString());
  }

  const changeHandler = (event: FormEvent<HTMLInputElement>) => {
    const newValue = parseInt((event.target as unknown as { value: string }).value);
    setValue(isNaN(newValue) ? '' : newValue.toString());
  }

  return (
    <div className={`modal-amount${className ? ` ${className}` : ''}`} {...props}>
      <Title
        className="modal-amount__title"
        variant="h2"
        text="Amount"
      />
      <Input
        className="modal-amount__input"
        value={value}
        onChange={changeHandler}
      />
      <div
        className="modal-amount__buttons"
      >
        {buttonsMap.map(item => (
          <Button
            className="modal-amount__btn"
            key={item.value}
            onClick={() => addHandler(item.value)}
            text={`+ $${item.value}`}
          />
        ))}
      </div>
      <Text
        className="modal-amount__hint"
        variant="text"
        text="From 21.00 to 906.00 USD at a time"
      />
    </div>
  )
}
