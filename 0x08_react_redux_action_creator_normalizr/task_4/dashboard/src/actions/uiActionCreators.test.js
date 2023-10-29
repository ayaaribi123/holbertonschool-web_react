import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
  
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
  
  describe('actions', () => {
    it('login', () => {
      const user = { email: 'diahancaroll@hotmail.com', password: 12345 };
      const data = { type: LOGIN, user };
      const res = login(user.email, user.password);
      expect(res).toEqual(data);
    });
  
    it('logout', () => {
      const data = { type: LOGOUT };
      const res = logout();
      expect(res).toEqual(data);
    });
  
    it('displayNotificationDrawer', () => {
      const data = { type: DISPLAY_NOTIFICATION_DRAWER };
      const res = displayNotificationDrawer();
      expect(res).toEqual(data);
    });
  
    it('hideNotificationDrawer', () => {
      const data = { type: HIDE_NOTIFICATION_DRAWER };
      const res = hideNotificationDrawer();
      expect(res).toEqual(data);
    });
  });
