import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
//import toJson from "enzyme-to-json";

/* const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
  image: null,
};

describe("<Account />", () => {
  it("contains h4", () => {
    const wrapper = shallow(<App user={user} />);
    const value = wrapper.find("h4").text();
    expect(value).toEqual("Adeneye David");
  });

  it("accepts user props", () => {
    const wrapper = shallow(<App user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
}); */

it("renders without crashing", () => {
  shallow(<App />);
});

/* it("renders welcome message", () => {
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
