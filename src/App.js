import React, { useState, useEffect } from 'react';
import DisplayOptions from './components/DisplayOptions';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);


  const [groupingOption, setGroupingOption] = useState(
    localStorage.getItem('groupingOption') || 'status'
  );

  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    localStorage.setItem('groupingOption', groupingOption);
  }, [groupingOption]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
        // console.log('Fetched data:', data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <DisplayOptions
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      />
      <KanbanBoard tickets={tickets} users={users} groupingOption={groupingOption} sortingOption={sortingOption} />
    </div>
  );
}

export default App;
