import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('actions', () => {
  it('selectCourse', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('unSelectCourse', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
