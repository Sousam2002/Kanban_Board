import React from 'react';

function GroupingOptions({ groupingOption, setGroupingOption }) {
  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  return (
    <div className="grouping-options">
      <label htmlFor="groupingSelect" style={{ marginRight: '10px', color:'gray' }}>
        Grouping
      </label>
      <select
        id="groupingSelect"
        value={groupingOption}
        onChange={handleGroupingChange}
        style={{ width: '100px', padding: '3px', borderRadius: '5px' , borderColor : 'gray' }}
      >
        <option value="status">By Status</option>
        <option value="user">By User</option>
        <option value="priority">By Priority</option>
      </select>
    </div>
  );
}

export default GroupingOptions;
