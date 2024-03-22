import React, { useState } from 'react';
import styles from '../App.module.css';

export const TicketFeedback = ({ authToken, ticketId, onClose, ticketTitle }) => {
  const [rating, setRating] = useState('5');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/feedback/${ticketId}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating,
          comment,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming the response includes the updated feedback
      const data = await response.json();
      console.log('Feedback updated:', data);
      onClose(); // Close the modal and optionally refresh the tickets list
    } catch (error) {
      console.error("Error updating feedback: ", error);
    }
  };

  return (
    <div className={styles.feedbackpopup}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{ticketTitle}</label><br/>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Comment:</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button className={styles.submit} type="submit">Submit Feedback</button>
        <button className={styles.submit} type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};
