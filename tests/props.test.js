import PropTypes from 'prop-types';
import { defaultProps, propTypes } from '../src/props';

test('propTypes are defined properly', () => {
  expect(propTypes).toEqual({
    labelText: PropTypes.string,
    labelClasses: PropTypes.string,
    labelAttributes: PropTypes.object,
    input: PropTypes.object,
    type: PropTypes.string.isRequired,
    meta: PropTypes.object,
    readOnly: PropTypes.bool,
    className: PropTypes.string,
  });
});

test('defaultProps are defined properly', () => {
  expect(defaultProps).toEqual({
    labelAttributes: {},
    className: '',
    meta: { touched: false, error: false },
    input: { name: '' },
  });
});
