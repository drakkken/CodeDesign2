import React from 'react';
import './Checkbox.css';

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className="custom-checkbox"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
