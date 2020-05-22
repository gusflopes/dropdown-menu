import React, { ComponentProps, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'

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
  goToMenu?: string;
}

const DropdownMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState();
  const dropdownRef = useRef(null)

  const calcHeight = (el: any) => {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  const DropdownItem: React.FC<DropdownItemProps> = (props) => {
    return (
      <a href="#hello" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef} >

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
        addEndListener={() => { }}
      >
        <div className="menu">
          <DropdownItem leftIcon="👹" rightIcon="👽">My Profile</DropdownItem>
          <DropdownItem goToMenu="settings">Settings</DropdownItem>
          <DropdownItem goToMenu="animals">Animals</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        addEndListener={() => { }}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="‹">
            <h2>Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon="👹" rightIcon="👽">My Profile</DropdownItem>
          <DropdownItem>Qualquer</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon="‹">
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}


export default App;
