import React, { useState } from 'react';
import { CreateTicket } from './CreateTicket';
import { ViewTickets } from './ViewTickets';
import { ViewFeedback } from './ViewFeedback';
import { Menu } from './menu';
import { UserAccountSettings } from './UserAccountSettings';

const SupportPlus = ({ authToken }) => {
  const [activeView, setActiveView] = useState('menu');

  const renderView = () => {
    switch (activeView) {
      case 'createTicket':
        return <CreateTicket authToken={authToken}/>;
      case 'viewTickets':
        return <ViewTickets authToken={authToken} setActiveView={setActiveView}/>;
      case 'viewFeedback':
        return <ViewFeedback />;
      case 'userAccountSettings':
        return <UserAccountSettings />;
      default:
        return <Menu setActiveView={setActiveView}/>;
    }
  };

  return (
    <div>
      <div>{renderView()}</div>
    </div>
  );
};

export default SupportPlus;

