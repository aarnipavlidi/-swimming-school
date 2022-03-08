import React, { useState } from 'react';
import axios from 'axios';
import { AUTH0_DOMAIN_NAME, AUTH0_CLIENT_ID, AUTH0_DATABASE_CONNECTION } from '../../../utils/config';

import EditPassword from './Password/Password';
import EditEmail from './Email/Email';
import Notification from '../../Notification';
import ConfirmModal from './Modal/ConfirmModal';
//const axios = require('axios').default;

import '../../../css/Dashboard.css';

const Settings = ({ currentAdminData, notificationMessage, notificationStatus, getNotification, collapseStatus, containerPosition }) => {

  const [currentModal, setCurrentModal] = useState(null);
  const handleModalChange = (getValue) => {
    setCurrentModal(getValue);
  };

  const handlePasswordChange = async () => {

    const options = {
      method: 'POST',
      url: `https://${AUTH0_DOMAIN_NAME}/dbconnections/change_password`,
      headers: {'content-type': 'application/json'},
      data: {
        client_id: AUTH0_CLIENT_ID,
        email: currentAdminData.email,
        connection: AUTH0_DATABASE_CONNECTION
      }
    };

    try {
      const response = await axios.request(options);
      getNotification({
        message: response.data,
        status: true
      });
    } catch (error) {
      console.log(error.message);
      getNotification({
        message: "There was an issue sending a magic link to your email. Please try again later!",
        status: false
      });
    };
  };

  return (
    <div className="dashboard-container" style={collapseStatus ? { overflowY: 'hidden' } : { overflowY: 'auto' }}>
      <Notification message={notificationMessage} checkStatus={notificationStatus} />
      <EditPassword
        currentAdminData={currentAdminData}
        containerPosition={containerPosition}
        getNotification={getNotification}
        handleModalChange={handleModalChange}
        elementValue="changePassword"
      />
      <EditEmail
        containerPosition={containerPosition}
        handleModalChange={handleModalChange}
        elementValue="confirmEmail"
      />
      <ConfirmModal handlePasswordChange={handlePasswordChange} value={currentModal} valueTarget="Settings" />
    </div>
  );
};

export default Settings;
