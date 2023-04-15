import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <div>
        <Button primary>click me</Button>
      </div>
      <div>
        <Button>buy now</Button>
      </div>
      <div>
        <Button>see deal</Button>
      </div>
      <div>
        <Button>hide ads</Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
