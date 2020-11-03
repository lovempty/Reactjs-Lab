import React, { Component } from "react";


import EventBind from "../components/EventBind";
import HoverCounterTwo from "../components/RenderProps/HoverCounterTwo";
import ParentComponent from "../components/ParentComponent";
import User from "../components/User";
import ClickCounterTwo from "../components/RenderProps/ClickCounterTwo";
import Counter from "../components/RenderProps/Counter";

class Teams extends Component {
  render = () => (
    <div>
      <EventBind></EventBind>
      <ParentComponent></ParentComponent>
      <ClickCounterTwo />
      <HoverCounterTwo />
      {/* <User render={(isLoggedIn) => isLoggedIn? 'Synth':'Guest'}/> */}
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default Teams;
