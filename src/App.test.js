import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});

/*
 it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Active Users Account Details</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(header)).toEqual(true);
}); */

/*
const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
};

describe("<Account />", () => {
  it("contains account", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("david@gmail.com");
  });

  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
});

 it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React Testing</h2>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
 */

/* it("renders without crashing", () => {
  const mockColor = "David";
  const wrapper = shallow(<App color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
 */

/* it("correctly increment the counter", () => {
  const mockColor = "david";
  const wrapper = shallow(<App color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
  //expect(wrapper.props().color).toEqual("david");
}); */
