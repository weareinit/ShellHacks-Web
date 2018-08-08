import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavItem = props =>
  <Link to={'/#'.concat(props.link.toString())}>{props.text}</Link>;

export default NavItem;
