import React from "react";
import { UserDataContext } from "./userData-context";

class UserMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">{`Hello, ${this.context.name}`}</span>
        <img
          src={this.context.avatar_url}
          alt="User Avatar"
          className="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserDataContext;

export default UserMenu;
