import React from "react";
import PropTypes from 'prop-types';
import classnames  from 'classnames';

const TextInputGroup = (props) => {
  const { label, value, name, type, placeholder, onChange, error} = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={classnames('form-control',{'is-invalid' : error})}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">
        {error}
      </div>
    </div>
  );
};

TextInputGroup.propTypes ={
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    error:PropTypes.string
}

TextInputGroup.defaultProps={
    type:'text'
}
export default TextInputGroup;