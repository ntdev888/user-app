import React, { useState} from 'react';
import styles from '../App.module.css';
import createtickets from "../imgs/newticket.png";
import viewtickets from "../imgs/folders.png";
import feedback from "../imgs/feedback.png";
import account from "../imgs/account.png";

export const Menu = ({ setActiveView }) => {

return(
    <div className={styles.menu}>
        <div className={styles.createTicket} onClick={() => setActiveView('createTicket')}><img className={styles.imgbutton} src={createtickets} />Create Ticket</div>
        <div className={styles.viewTickets} onClick={() => setActiveView('viewTickets')}><img className={styles.imgbutton} src={viewtickets} />View Tickets</div>
        <div className={styles.viewFeedback} onClick={() => setActiveView('viewFeedback')}><img className={styles.imgbutton} src={feedback} />View Feedback</div>
        <div className={styles.userAccountSettings} onClick={() => setActiveView('userAccountSettings')}><img className={styles.imgbutton} src={account} />Account Settings</div>
    </div>
);
};
