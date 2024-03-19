import React, { useState, useEffect } from 'react';

export const ViewTickets = ({ authToken, setActiveView }) => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/tickets/by_user/', {
          method: 'GET',
          headers: {
            'Authorization': `Token ${authToken}`,
            'Content-Type': 'application/json',
          },
          data: {
            'userId' : '2'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTickets(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>
      <h1>Tickets</h1>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              <h2>{ticket.title}</h2>
              <p>Description: {ticket.description}</p>
              <p>Status: {ticket.status}</p>
              <p>Assigned To: {ticket.assignTo}</p>
              <p>Contact: {ticket.contactMe}</p>
              <p>Priority: {ticket.priority}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There was an Error</p>
      )}
    </div>
    <button onClick={() => setActiveView('menu')}>Home</button>
    </div>
  );
};

