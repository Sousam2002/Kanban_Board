// src/SortingOptions.js
import React from 'react';

function SortingOptions({ sortingOption, setSortingOption }) {
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div className="sorting-options">
      <label htmlFor="sortingSelect"  style={{ marginRight: '15px', color:'gray' }}>
        Ordering
      </label>
      <select
        id="sortingSelect"
        value={sortingOption}
        onChange={handleSortingChange}
        style={{ width: '100px' , padding: '3px',borderRadius: '5px' , borderColor : 'gray' }}
      >
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingOptions;
