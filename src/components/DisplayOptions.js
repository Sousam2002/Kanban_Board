import React, { useState } from 'react';
import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons'; 
import './DisplayOptions.css';

function DisplayOptions({ groupingOption, setGroupingOption, sortingOption, setSortingOption }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleDisplayOptions = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <div className="display-options">
      <div className='nav' onClick={toggleDisplayOptions}>
        <div className="icon">
          <FontAwesomeIcon icon={faSliders} />
        </div>
        <span>DISPLAY OPTIONS</span>
        <div className="dropdown-content">
          <GroupingOptions groupingOption={groupingOption} setGroupingOption={setGroupingOption} />
          <SortingOptions sortingOption={sortingOption} setSortingOption={setSortingOption} />
        </div>
      </div>
    </div>
  );
}

export default DisplayOptions;
