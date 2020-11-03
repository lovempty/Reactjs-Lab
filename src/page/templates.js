import React, { Component } from "react";
import ClickCounter from "../components/HOC/ClickCounter";
import Form from "../components/Form";
import HoverCounter from "../components/HOC/HoverCounter";
import RootComponent from "../components/Context/RootComponent";

class Templates extends Component {
  render = () => (
    <React.Fragment>
      {/* <Form></Form>
      <ClickCounter name='Hop'></ClickCounter>
      <HoverCounter></HoverCounter> */}
      <RootComponent/>
    </React.Fragment>
  );
}

export default Templates;
