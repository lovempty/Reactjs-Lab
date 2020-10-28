
import "./App.css";
import HeaderNav from "./components/layout/header";
import { Button, Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Organizations from "./page/organizations";
import Teams from "./page/teams";
import Members from "./page/members";
import Templates from "./page/templates";
import LeftNav from "./components/layout/leftNav";
import { Row, Col } from "antd";
import { Input } from "antd";
import {SearchOutlined}  from "@ant-design/icons";
const { Header} = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header
            className="headerNav"
            style={{ backgroundColor: "#021d41", height: 69 }}
          >
            <HeaderNav></HeaderNav>
          </Header>
          <Row>
            <Col span={21} push={3}>
              <Row className="rowSearch">
                <Col span={5}> 3 organizations </Col>
                <Col span={7} offset={12}>
                  <Input className="searchBtn" placeholder="Search" prefix={<SearchOutlined />}></Input>
                  <Button className="addBtn" type="primary">
                    + Add new
                  </Button>
                </Col>
              </Row>
              <Row>
                <div className="content">
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/organizations" component={Organizations} />
                    <Route path="/teams" component={Teams} />
                    <Route path="/members" component={Members} />
                    <Route path="/templates" component={Templates} />
                  </Switch>
                </div>
              </Row>
            </Col>
            <Col span={3} pull={21}>
              <LeftNav></LeftNav>
            </Col>
          </Row>
        </Layout>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
export default App;
