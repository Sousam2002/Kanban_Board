import React from 'react';
import './KanbanBoard.styles.css';
import Card from './Card';

function KanbanBoard({ tickets, users, groupingOption, sortingOption }) {
  const priorityText = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  const groupAndSortTickets = () => {
    let groupedAndSortedTickets = [...tickets];

    if (groupingOption === 'status') {
      groupedAndSortedTickets.sort((a, b) => a.status.localeCompare(b.status));
    } else if (groupingOption === 'user') {
      groupedAndSortedTickets.sort((a, b) => a.userId.localeCompare(b.userId));
    } else if (groupingOption === 'priority') {
      groupedAndSortedTickets.sort((a, b) => b.priority - a.priority);
    }

    if (sortingOption === 'title') {
      groupedAndSortedTickets.sort((a, b) => a.title.localeCompare(b.title));
    }

    return groupedAndSortedTickets;
  }

  const groupedAndSortedTickets = groupAndSortTickets();

  const groupedCards = [];
  let currentGroup = [];
  let isFirstCardInGroup = true;

  for (let i = 0; i < groupedAndSortedTickets.length; i++) {
    const ticket = groupedAndSortedTickets[i];

    if (i === 0 || getGroupValue(ticket) === getGroupValue(groupedAndSortedTickets[i - 1])) {
      currentGroup.push(ticket);
    } else {
      groupedCards.push(currentGroup);
      currentGroup = [ticket];
      isFirstCardInGroup = true;
    }
  }
  groupedCards.push(currentGroup);

  function getGroupValue(ticket) {
    if (groupingOption === 'status') {
      return ticket.status;
    } else if (groupingOption === 'user') {
      return ticket.userId;
    } else if (groupingOption === 'priority') {
      return ticket.priority;
    }
    return '';
  }

  return (
    <div className="kanban-board">
      {groupedCards.map((group, index) => {
        isFirstCardInGroup = true; 
        return (
          <div key={index} className="kanban-board-column">
            <div className="horizontal-cards-container">
              {group.map((ticket, ticketIndex) => (
                <div key={ticket.id}>
                  {isFirstCardInGroup && (
                    <div className="group-header">
                      {groupingOption === 'status' && (
                        <h3 className="status-header">
                          {ticket.status}
                          <span className="card-count">{group.length}</span>
                        </h3>
                      )}
                      {groupingOption === 'user' && (
                        <h3 className="user-header">
                          {users.find((user) => user.id === ticket.userId)?.name}
                          <span className="card-count">{group.length}</span>
                        </h3>
                      )}
                      {groupingOption === 'priority' && (
                        <h3 className="priority-header">
                          {priorityText[ticket.priority]}
                          <span className="card-count">{group.length}</span>
                        </h3>
                      )}
                    </div>
                  )}
                  <Card ticket={ticket} groupingOption={groupingOption} users={users} />
                  {isFirstCardInGroup = false}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;
