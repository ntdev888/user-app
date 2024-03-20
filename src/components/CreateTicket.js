import React, { useState } from 'react';
import styles from "../App.module.css";

export const CreateTicket = ({ authToken,setActiveView,user }) => {
  const [area, setIssueArea] = useState(' ');
  const [priority, setPriority] = useState('Low');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contactMe, setContactBy] = useState('Email');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const ticketData = {
      user,
      area,
      priority,
      title,
      description,
      contactMe,
    };

    // Submit the form data using Fetch API
    try {
      const response = await fetch('http://localhost:8080/api/tickets/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${authToken}`,
        },
        body: JSON.stringify(ticketData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
        console.log(ticketData);
      }

      const data = await response.json();
      console.log('Ticket submitted successfully:', data);
      // Handle success (e.g., show message, clear form, etc.)
      setActiveView('menu')
    } catch (error) {
      console.error('Error submitting ticket:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className={styles.createticket}>
        <h2>Create Ticket</h2>
    <form onSubmit={handleSubmit}>
      <label>Issue Area:</label><br/>
      <select value={area} onChange={(e) => setIssueArea(e.target.value)}>
        <option value=" ">Select Issue Area</option>
        <option value="Cellphone">Cellphone</option>
        <option value="Laptop">Laptop</option>
        <option value="AuditPlus">AuditPlus</option>
        <option value="MS Office">MS Office</option>
      </select>
      
      <legend>Priority:</legend>
<div className={styles.priority}>
  <div className={styles.priorityLabel}>
    <label>Low</label>
    <input type="radio" value="Low" checked={priority === 'Low'} onChange={(e) => setPriority(e.target.value)} />
  </div>
  <div className={styles.priorityLabel}>
    <label>Medium</label>
    <input type="radio" value="Medium" checked={priority === 'Medium'} onChange={(e) => setPriority(e.target.value)} />
  </div>
  <div className={styles.priorityLabel}>
    <label>High</label>
    <input type="radio" value="High" checked={priority === 'High'} onChange={(e) => setPriority(e.target.value)} />
  </div>
</div>


      <label>Title:</label><br/>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>

      <label>Description:</label><br/>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br/>

      <label>Contact By:</label><br/>
      <select value={contactMe} onChange={(e) => setContactBy(e.target.value)}>
        <option value="Phone">Phone</option>
        <option value="Email">Email</option>
        <option value="Teams">Teams</option>
        <option value="Text Msg">Text Msg</option>
      </select><br/><br/>

      <button className={styles.login} type="submit">Submit Ticket</button>
      <button className={styles.login} onClick={() => setActiveView('menu')}>Home</button>
    </form>
    </div>
  );
};

export default CreateTicket;
