import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./leftNav.css";
import {
  BankOutlined,
  ProfileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

class LeftNav extends Component {
  render = () => {
    return (
      <div>
        <ul>
          <Link to="/organizations">
            <li className="active">
              <BankOutlined className="icons" />
              Organizations
            </li>
          </Link>
          <Link to="/teams">
            <li>
              <TeamOutlined className="icons" />
              Teams
            </li>
          </Link>
          <Link to="/members">
            <li>
              <UserOutlined className="icons" />
              Members
            </li>
          </Link>
          <Link to="/templates">
            <li>
              <ProfileOutlined className="icons" />
              Templates
            </li>
          </Link>
        </ul>
      </div>
    );
  };
}

export default LeftNav;
