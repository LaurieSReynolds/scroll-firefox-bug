import _ from 'lodash';
import scrollIntoView from 'scroll-into-view';

export const showSelected = (selected) => {
  const target = `tr-${selected}`;
  if (!_.isNil(target)) {
    const element = document.getElementById(target);
    if (element) {
      // list is not left aligned with the navigation
      // bar since the navigation bar is a fixed width.
      // Align the left to 1 so it doesn't scroll to the
      // left
      scrollIntoView(element, {
        align: {
          top: 0.5,
          left: 1
        }
      });
    }
  }
};
