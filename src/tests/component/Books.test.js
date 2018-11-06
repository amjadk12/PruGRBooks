import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Books from "../../component/Books";
import Book from "../../component/Book";

configure({ adapter: new Adapter() });
describe("Books", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Books />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render a <Book />", () => {
    expect(wrapper.find("Book").length).toEqual(1);
  });
});
