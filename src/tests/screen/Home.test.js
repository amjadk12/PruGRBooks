import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from "../../screen/Home";
import SearchBooks from "../../component/SearchBooks";
import Books from "../../component/Books";

configure({ adapter: new Adapter() });
describe("Home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render - component - <SearchBooks />", () => {
    expect(wrapper.find("SearchBooks.searchbooks").length).toEqual(1);
  });
  it("should render - component - <Books />", () => {
    expect(wrapper.find("Books.books").length).toEqual(1);
  });
});
