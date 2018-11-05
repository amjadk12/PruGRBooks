import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SearchBooksByText } from "../../service/GetBooksByText";

configure({ adapter: new Adapter() });
describe("GetBooksByText", () => {
  it("should check for SearchBooksByText", () => {
    //add here API logic to test
  });
});
