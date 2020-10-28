import { Component } from "react";
import { Row, Col } from "antd";
import "./organizations.css";
class Organizations extends Component {
  render = () => (
    <div>
      <Row className="rowData">
        <Col span={6}>Trames pte ltd</Col>
        <Col span={3} offset={12}>13 members</Col>
        <Col span={2} offset={1}>6 teams</Col>
      </Row>
      <Row className="rowData">
        <Col span={6}>Richland logistics</Col>
        <Col span={3} offset={12}>9 members</Col>
        <Col span={2} offset={1}>0 teams</Col>
      </Row>
      <Row className="rowData">
        <Col span={6}>Damco pte ltd</Col>
        <Col span={3} offset={12}>0 members</Col>
        <Col span={2} offset={1}>0 teams</Col>
      </Row>
    </div>
  );
}

export default Organizations;
