import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "./header.css";
import { CompassFilled, BellFilled,UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button } from "antd";
import logo from 'F:/ReactJS/hello-world/src/images/logo.png'
const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class HeaderNav extends Component {
  render = () => {
    return (
      <div>
        <Row className="header">
          <Col span={4}>
            <img src={logo} alt="Trame's Logo"/>
          </Col>
          <Col span={3} offset={16}>
            <Button className="buttonDash">
              {" "}
              <CompassFilled id="compassIcon" />
              Go to dashboard
            </Button>
          </Col>
          <Col span={1}>
            <BellFilled id="bellIcon" />
            <Dropdown className="dropdown" overlay={menu}>
            <UserOutlined id="userIcon"/>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  };
}
export default HeaderNav;
