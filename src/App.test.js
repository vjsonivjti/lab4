import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import App from "./App";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

let rootContainer, shallowComp;

beforeEach(() => {
  rootContainer = document.createElement("div");
  shallowComp = document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Simple Counter App Title", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const h1 = rootContainer.querySelector("h2");
    expect(h1.textContent).to.equal("Simple Counter App");
  });
});
