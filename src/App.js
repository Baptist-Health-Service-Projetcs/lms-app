import React from "react";
import Form from "./components/Form/Form";
import "./tailwind.generated.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Code Class</h1>
        <Form title="Form Component" />
      </div>
    )
  }
}

export default App;
