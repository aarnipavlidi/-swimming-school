import React from 'react';

import DashboardHome from './DashboardHome';
import Notification from '../../Notification';

import '../../../css/Dashboard.css';

const Dashboard = ({ currentAdminData, notificationMessage, notificationStatus, collapseStatus, containerPosition }) => {

  return (
    <div className="dashboard-container" style={collapseStatus ? { overflowY: 'hidden' } : { overflowY: 'auto' }}>
      <Notification message={notificationMessage} checkStatus={notificationStatus} />
      <DashboardHome currentAdminData={currentAdminData} containerPosition={containerPosition} />
    </div>
  );
};

export default Dashboard;
