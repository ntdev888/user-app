import React, { useState } from "react";
import styles from "../App.module.css";
import createtickets from "../imgs/newticket.png";
import viewtickets from "../imgs/folders.png";
import feedback from "../imgs/feedback.png";
import account from "../imgs/account.png";

export const Menu = ({ setActiveView }) => {
  return (
    <div className={styles.menu}>
      <button
        className={styles.createTicket}
        onClick={() => setActiveView("createTicket")}
      >
        <img
          className={styles.imgbutton}
          src={createtickets}
          alt="Create Ticket"
        />
        Create Ticket
      </button>
      <button
        className={styles.viewTickets}
        onClick={() => setActiveView("viewTickets")}
      >
        <img
          className={styles.imgbutton}
          src={viewtickets}
          alt="View Tickets"
        />
        View Tickets
      </button>
      <button
        className={styles.viewFeedback}
        onClick={() => setActiveView("viewFeedback")}
      >
        <img className={styles.imgbutton} src={feedback} alt="View Feedback" />
        Place Feedback
      </button>
      <button
        className={styles.userAccountSettings}
        onClick={() => setActiveView("userAccountSettings")}
      >
        <img
          className={styles.imgbutton}
          src={account}
          alt="Account Settings"
        />
        Account Settings
      </button>
    </div>
  );
};
