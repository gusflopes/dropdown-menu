import React, {useState, ComponentProps} from 'react'

interface NavItemProps extends ComponentProps<any> {
  icon?: string;
  title?: string;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#hello" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon && props.icon}
        {props.title && props.title}
      </a>

      {open && props.children}
    </li>
  )
}

export default NavItem;
