import React from 'react';

const NavItem = props =>
  <a onClick={props.linkClick} href={props.link}>{props.text}</a>;

export default NavItem;
