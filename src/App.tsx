import React, { ComponentProps, useState } from 'react';

function App() {
  return (
    <Navbar>
      <NavItem icon="😎" />
      <NavItem icon="🤯" />
      <NavItem icon="🙃" />
      <NavItem icon="🤮">
        <DropdownMenu />
      </NavItem>
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
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#hello" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

interface DropdownItemProps extends ComponentProps<any> {
  leftIcon?: string;
  rightIcon?: string;
}
const DropdownMenu = () => {
  const DropdownItem: React.FC<DropdownItemProps> = (props) => {
    return (
      <a href="#hello" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )

  }
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem leftIcon="👹" rightIcon="👽">My Profile</DropdownItem>
      <DropdownItem>My Profile</DropdownItem>
    </div>
  )
}


export default App;
