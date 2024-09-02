import { createContext, FC, useCallback, useEffect, useState } from "react";

import { Title } from "../../ui";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPaymentMethods, selectPaymentMethods } from "../../store/features/paymentMethods";
import { PaymentMethodTypeEnum } from "../../types/types";

import { PaymentMethodsList } from "./PaymentMethod";
import { PromoCode } from "./PromoCode";
import { Transactions } from "./Transactions";
import { Modal } from "./Modal";

interface ModalContextType {
  switchModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({ switchModal: () => { } })

export const Main: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { paymentMethods } = useAppSelector(selectPaymentMethods);

  const cardPaymentMethods = paymentMethods.filter(
    paymentMethod => paymentMethod.type === PaymentMethodTypeEnum.CARD);


  const cryptoPaymentMethods = paymentMethods.filter(
    paymentMethod => paymentMethod.type === PaymentMethodTypeEnum.CRYPTO);

  const switchModal = useCallback(() => {
    setIsModalOpen(value => !value);
  }, [setIsModalOpen])

  useEffect(() => {
    dispatch(getPaymentMethods());
  }, [dispatch]);

  return (
    <main className="main">
      <div className="main__wrapper">
        <Title variant="h1" text="Make A Deposit" />
        <ModalContext.Provider value={{ switchModal }}>
          <section className="main__section main__section--payment-methods">
            <Title variant="h2" text="Choose Payment Method" className="main__h2" />
            <PaymentMethodsList
              className="main__payment-methods--cards"
              title="Cards, E-Money, PIN"
              paymentMethods={cardPaymentMethods}
            />
            <PaymentMethodsList
              className="main__payment-methods--crypto"
              title="Cryptocurrency"
              paymentMethods={cryptoPaymentMethods}
            />
          </section>
        </ModalContext.Provider>

        <PromoCode className="main__promo-code" />

        <Transactions className="main__transactions" />

      </div>

      {isModalOpen && <Modal closeHandler={switchModal} />}
    </main>
  )
}
