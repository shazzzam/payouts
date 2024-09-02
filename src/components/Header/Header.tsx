import { FC, useCallback, useEffect, useState } from "react";

import { Logo } from "../../ui";
import { BellIcon, BurgerIcon, GiftIcon, SearchIcon } from "../../ui/icons";
import { useAppDispatch } from "../../store/hooks";
import { getBalance } from "../../store/features/balance";

import { Balance } from "./Balance";
import { Navigation } from "./Navigation";

export const Header: FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const switchHandler = useCallback(() => {
    setIsNavOpen(value => !value);
  }, [setIsNavOpen]);

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__left" onClick={switchHandler}>
            <button><BurgerIcon /></button>
            <Logo className="header__logo" />
          </div>
          <div className="header__right">
            <div className="header__icons">
              <SearchIcon />
              <GiftIcon />
              <BellIcon withBage={true} />
            </div>
            <Balance />
            <div className="header__avatar">
              <img className="header__avatar-img" src="/assets/avatars/avatar.png" />
            </div>
          </div>
        </div>
      </header>
      {isNavOpen && <Navigation closeHandler={switchHandler} />}
    </>
  )
}
