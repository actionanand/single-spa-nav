import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import classes from './root.component.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

export default function Root() {
  return (
    <BrowserRouter>
      <nav className={classes.nav}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="angular">Angular</NavigationItem>
        <NavigationItem link="react">React</NavigationItem>
        <NavigationItem link="vue">Vue</NavigationItem>
        <NavigationItem link="svelte">Svelte</NavigationItem>
      </nav>
    </BrowserRouter>
  );
}
