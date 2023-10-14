import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import './Card.css';

function Card({ ticket }) {
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem(`checkbox-${ticket.id}`) === 'true'
  );

  useEffect(() => {
    localStorage.setItem(`checkbox-${ticket.id}`, isChecked);
  }, [isChecked, ticket.id]);

  const toggleCheckbox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className={`card ${isChecked ? 'checked' : ''}`}>
      <div className="card-content">
        <span className='cam'>{ticket.id}</span>
        <div className="checkbox">
          <input
            type="checkbox"
            id={`checkbox-${ticket.id}`}
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <label htmlFor={`checkbox-${ticket.id}`}></label>
        </div>
        <h4>{ticket.title}</h4>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

export default Card;
