import PropTypes from 'prop-types';

export const defaultProps = {
  labelAttributes: {},
  className: '',
  meta: { touched: false, error: false },
  input: { name: '' },
};

export const propTypes = {
  labelText: PropTypes.string,
  labelClasses: PropTypes.string,
  labelAttributes: PropTypes.object,
  input: PropTypes.object,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
};
