import React from 'react';
import { EmailStyling } from './EmailStyling';

const EditEmail = ({ containerPosition }) => {

  return (
    <div className={containerPosition ? "container content-container-behind" : "container"} style={EmailStyling.mainContainer}>
      <div className="card" style={EmailStyling.cardContainer}>
        <div className="card-header" style={EmailStyling.cardHeader}>
          <div style={EmailStyling.cardHeaderText}>
            <i className="fa-solid fa-at"></i>
          </div>
          <div className="title-font" style={EmailStyling.cardHeaderText}>
            <a>Vahvista sähköpostiosoitteesi</a>
          </div>
        </div>
        <div className="card-body" style={EmailStyling.cardContent}>
          <div style={EmailStyling.cardContentText}>
            <p className="content-font">Jotta pystyt käyttämään sovellusta kokonaisuudessaan, niin se vaatii sähköpostiosoitteesi vahvistamista. Pystyt tekemään sen kätevästi alla olevan painikkeen avulla.</p>
            <p className="content-font">Painikkeen klikkauksen jälkeen saat erillisen linkin sähköpostiisi, jonka jälkeen sähköpostiosoitteesi on vahvistettu.</p>
          </div>
          <div style={EmailStyling.cardContentText}>
            <button className="btn btn-sm content-font" style={EmailStyling.cardContentButton} disabled>Vahvista email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmail;
