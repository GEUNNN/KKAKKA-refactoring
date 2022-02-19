import React from "react";
import "./SubNav.scss";

class SubNav extends React.Component {
  render() {
    return (
      <div className="subNavContainer">
        <nav className="subNav">
          <div className="subNavContent">
            <h2 className="title">{this.props.title}</h2>
            <span className="subTitle">{this.props.desc}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default SubNav;
