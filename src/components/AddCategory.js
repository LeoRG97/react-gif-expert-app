import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategory }) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      setCategory((data) => [value, ...data]);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
}

export default AddCategory;
