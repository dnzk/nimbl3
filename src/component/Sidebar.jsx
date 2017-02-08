import React from 'react';
import Icon from './Icon';
import controlsPurple from '../images/icons/controls-purple.svg';

const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`

const SidebarLink = (props) => (
  <li className="c-sidebar-list__item">
    <a href="#" className="c-sidebar-link">
      <span className="c-sidebar-link__icon">
        <Icon glyph={ controlsPurple } className="l-flex__align" />
      </span>
      { capitalize(props.menu.text) }
    </a>
  </li>
)

class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    let menu = this.props.menu.map( (m, k) => {
      return <SidebarLink menu={m} key={k} />
    });

    return (
      <div className="l-flex__none c-sidebar">
        <header className="c-sidebar__header">
        </header>
        <nav className="c-sidebar__navigation">
          <ul className="c-sidebar-list">
            { menu }
          </ul>
        </nav>
      </div>
    )
  }
}


export default Sidebar;
