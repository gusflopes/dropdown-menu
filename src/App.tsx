import React, { ReactPropTypes, HTMLAttributes, ReactHTMLElement, PropsWithChildren, ComponentProps, ReactElement } from 'react';

function App() {
  return (
    <Navbar>
      <NavItem icon="😎" />
      <NavItem icon="🤯" />
      <NavItem icon="🙃" />
    </Navbar>
  );
}

const Navbar: React.FC = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

interface NavItemProps extends ComponentProps<any> {
  icon: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <li className="nav-item">
      <a href="#hello" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}

export default App;
