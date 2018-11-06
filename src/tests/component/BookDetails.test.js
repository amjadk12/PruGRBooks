import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import BookDetails from "../../component/BookDetails";

configure({ adapter: new Adapter() });
describe("BookDetails", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BookDetails />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});
