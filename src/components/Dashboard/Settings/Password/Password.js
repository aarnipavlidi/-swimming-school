import React from 'react';
import { PasswordStyling } from './PasswordStyling';

const EditPassword = ({ currentAdminData, containerPosition, getNotification, handleModalChange, ...props }) => {

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
            <button className="btn btn-sm content-font" style={PasswordStyling.cardContentButton} onClick={() => handleModalChange(props.elementValue)} data-bs-toggle="modal" data-bs-target="#targetSettingsModal">Vaihda salasana</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
