import React, { ComponentProps, useState, useRef, ReactElement, useEffect } from 'react';

import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import DropdownMenu from './components/DropdownMenu'


function App() {
  return (
    <Navbar>
      <NavItem title="Home" />
      <NavItem icon="🤯" />
      <NavItem icon="🙃" />

      <NavItem icon="🤮">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
