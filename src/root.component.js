import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import classes from './root.component.module.css';

export default function Root() {
  return (
    <BrowserRouter>
      <nav className={classes.nav}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/angular" className={classes.link}>
          Angular
        </Link>
        <Link to="/react" className={classes.link}>
          React
        </Link>
        <Link to="/vue" className={classes.link}>
          Vue
        </Link>
        <Link to="/svelte" className={classes.link}>
          Svelte
        </Link>
      </nav>
    </BrowserRouter>
  );
}
