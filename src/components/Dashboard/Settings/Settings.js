import React from 'react';

import EditPassword from './Password/Password';
import EditEmail from './Email/Email';
import Notification from '../../Notification';

import '../../../css/Dashboard.css';

const Settings = ({ currentAdminData, notificationMessage, notificationStatus, getNotification, collapseStatus, containerPosition }) => {

  return (
    <div className="dashboard-container" style={collapseStatus ? { overflowY: 'hidden' } : { overflowY: 'auto' }}>
      <Notification message={notificationMessage} checkStatus={notificationStatus} />
      <EditPassword currentAdminData={currentAdminData} containerPosition={containerPosition} getNotification={getNotification} />
      <EditEmail containerPosition={containerPosition} />    
    </div>
  );
};

export default Settings;
