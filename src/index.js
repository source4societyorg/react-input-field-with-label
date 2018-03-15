import React from 'react';
import { ifTrueElseDefault } from '@source4society/scepter-utility-lib';
import { propTypes, defaultProps } from './props';

const InputFieldWithLabel = ({ labelText, labelClasses, labelAttributes, input, type, className, meta: { touched, error }, readOnly }) => (
  <div className={`field-with-label-block block_${input.name} ${className}`}>
    <div className={`label-block label_${input.name}`}>
      <label htmlFor={input.name} className={`formLabel ${labelClasses}`} {...labelAttributes}>{labelText}</label>
    </div>
    <div className={`field-block field_${input.name}`}>
      <input {...input} readOnly={ifTrueElseDefault(readOnly, 'readonly', '')} type={type} />
      {touched && error && <div className={'error-container'}><span>{error}</span></div>}
    </div>
  </div>
);

InputFieldWithLabel.defaultProps = defaultProps;
InputFieldWithLabel.propTypes = propTypes;
export default InputFieldWithLabel;
