import { FC, memo } from "react";
import { Logo } from "../../ui";
import { CrossIcon } from "../../ui/icons";

interface NavigationProps {
  closeHandler: () => void;
}

const menuItems = [
  {
    text: 'Casino Games',
    url: '/casion',
  },
  {
    text: 'Live Games',
    url: '/live',
  },
  {
    text: 'TV Bet',
    url: '/tv-bet',
  },
  {
    text: 'Sport Games',
    url: '/sport',
  },
  {
    text: 'Virtual',
    url: '/virtual',
  },
  {
    text: 'Tournaments',
    url: '/tournaments',
  },
  {
    text: 'Spin Shop',
    url: '/spin-shop',
  },
  {
    text: 'FAQ',
    url: '/faq',
  },
  {
    text: 'Support Chat',
    url: '/support',
  },
];

const Nav: FC<NavigationProps> = ({ closeHandler }) => {
  return (
    <div className="navigation">
      <div
        className="navigation__headline"
        onClick={closeHandler}
      >
        <Logo className="navigation__logo" />
        <CrossIcon className="navigation__close" />
      </div>
      <nav className="navigation__container">
        <ul className="navigation__list">
          {menuItems.map(item => (
            <li className="navigation__item" key={item.url}>{item.text}</li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export const Navigation = memo(Nav);
