import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';
  
describe('actions', () => {
  it('markAsRead', () => {
    const data = {
      type: MARK_AS_READ,
      index: 1,
    };
    const res = markAsAread(1);
    expect(res).toEqual(data);
  });
  
  it('setNotificationFilter', () => {
    const data = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    const res = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(res).toEqual(data);
  });
});
