import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from "react";
import NotificationItem from "./NotificationItem";


it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });
  it("Notifications renders Notification Item and first item has correct html", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const listItems = wrapper.find("NotificationItem");
    expect(listItems).toBeDefined();
    expect(listItems.first().html()).toEqual(
      <li data-notification-type="default">New course available</li>
    );
  });