import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchBooks from "../../component/SearchBooks";

configure({ adapter: new Adapter() });
describe("SearchBooks", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBooks />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render a <input />", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
  it("should render a <button />", () => {
    expect(wrapper.find("button.search").text()).toEqual("Search");
  });
  it("should call onChange prop with input value", () => {
    const onSearchMock = jest.fn();
    const wrapper = mount(
      <input className="mockInput" onChange={onSearchMock} value="jungle" />
    );
    wrapper.find("input").simulate("change", "test");
    expect(wrapper.find("input.mockInput").props().value).toEqual("jungle");
  });
  it("should check the state of searchText", () => {
    wrapper
      .find("input.searchtext")
      .simulate("change", { target: { name: "search", value: "jungle" } });
    expect(wrapper.state("searchText")).toEqual("jungle");
  });
  it("should call mock function when button is clicked", () => {
    const mockFn = jest.fn();
    const tree = shallow(<button name="button test" handleHandler={mockFn} />);
    tree.simulate("click");
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
  it("should check the state of preSearchText", () => {
    wrapper
      .find("input.searchtext")
      .simulate("change", { target: { name: "search", value: "jungle" } });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("prevSearchText")).toEqual("jungle");
  });
  it("should check searching for the same text as previous", () => {
    wrapper
      .find("input.searchtext")
      .simulate("change", { target: { name: "search", value: "jungle" } });
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.state("prevSearchText")).toEqual(
      wrapper.state("searchText")
    );
  });
});
