import React from 'react';
import { PasswordStyling } from './PasswordStyling';
import { AUTH0_DOMAIN_NAME, AUTH0_CLIENT_ID, AUTH0_DATABASE_CONNECTION } from '../../../../utils/config';

const axios = require('axios').default;

const EditPassword = ({ currentAdminData, containerPosition, getNotification }) => {

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
    <div className={containerPosition ? "container content-container-behind" : "container"} style={PasswordStyling.mainContainer}>
      <div className="card" style={PasswordStyling.cardContainer}>
        <div className="card-header" style={PasswordStyling.cardHeader}>
          <div style={PasswordStyling.cardHeaderText}>
            <i className="fa-solid fa-key"></i>
          </div>
          <div className="title-font" style={PasswordStyling.cardHeaderText}>
            <a>Vaihda salasanasi</a>
          </div>
        </div>
        <div className="card-body" style={PasswordStyling.cardContent}>
          <div style={PasswordStyling.cardContentText}>
            <p className="content-font">Jos haluat vaihtaa salasanasi, niin pystyt tekemään sen kätevästi alla olevan painikkeen avulla.</p>
            <p className="content-font">Painikkeen klikkauksen jälkeen saat erillisen linkin sähköpostiisi, jonka kautta voit vaihtaa nykyisen salasanasi uuteen.</p>
          </div>
          <div style={PasswordStyling.cardContentText}>
            <button onClick={handlePasswordChange} className="btn btn-sm content-font" style={PasswordStyling.cardContentButton}>Vaihda salasana</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
