import React, { useState } from 'react';
import { CreateTicket } from './CreateTicket';
import { ViewTickets } from './ViewTickets';
import { ViewFeedback } from './ViewFeedback';
import { Menu } from './menu';
import { UserAccountSettings } from './UserAccountSettings';
import styles from "../App.module.css"
import profilePic from "../imgs/profilePic.png"

const SupportPlus = ({ authToken }) => {
  const [activeView, setActiveView] = useState('menu');

  const renderView = () => {
    switch (activeView) {
      case 'createTicket':
        return <CreateTicket authToken={authToken} setActiveView={setActiveView}/>;
      case 'viewTickets':
        return <ViewTickets authToken={authToken} setActiveView={setActiveView}/>;
      case 'viewFeedback':
        return <ViewFeedback authToken={authToken} setActiveView={setActiveView}/>;
      case 'userAccountSettings':
        return <UserAccountSettings authToken={authToken} setActiveView={setActiveView}/>;
      default:
        return <Menu setActiveView={setActiveView}/>;
    }
  };

  return (
    <div className={styles.header}>
        <div className={styles.profileContainer}>
        <img src={profilePic} alt="Profile" className={styles.profilePic} />
        </div>
      <div className={styles.component}>{renderView()}</div>
    </div>
  );
};

export default SupportPlus;

