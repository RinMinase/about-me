import { render } from "preact";

import { Nav } from "./common";

import "./main.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <Nav />
      <div class="main-component">
        <Routes />
      </div>
    </>
  );
}

render(<App />, document.getElementById("app") as HTMLElement);
