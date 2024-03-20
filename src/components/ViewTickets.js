import React, { useState, useEffect } from 'react';
import styles from "../App.module.css"

export const ViewTickets = ({ authToken, setActiveView, user }) => {
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
            'user' : `${user}`
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
    <div className={styles.component}>
    <div className={styles.tickets}>
      <h2>Tickets</h2>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              <h3>{ticket.title}</h3>
              Description: {ticket.description}<br/>
              status: {ticket.status}<br/>
              Assigned To: {ticket.assignTo}<br/>
              Contact: {ticket.contactMe}<br/>
              Priority: {ticket.priority}<br/>
            </li>
          ))}
        </ul>
      ) : (
        <p>There was an Error</p>
      )}
    </div>
    <button className={styles.login} onClick={() => setActiveView('menu')}>Home</button>
    </div>
  );
};

