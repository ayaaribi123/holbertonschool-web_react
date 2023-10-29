import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('actions', () => {
  it('selectCourse', () => {
    const res = selectCourse(1);
    expect(res).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse', () => {
    const res = unSelectCourse(1);
    expect(res).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
