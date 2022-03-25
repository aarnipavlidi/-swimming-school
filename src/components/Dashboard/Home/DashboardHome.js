import React from 'react';
import { DashboardHomeStyling } from './DashboardHomeStyling';

const Dashboard = ({ currentAdminData, containerPosition }) => {

  return (
    <div className={containerPosition ? "container content-container-behind" : "container"} style={DashboardHomeStyling.mainContainer}>
      <div style={DashboardHomeStyling.welcomeContainer}>
        <div style={DashboardHomeStyling.userInfo}>
          <p className="title-font" style={DashboardHomeStyling.titleText}>Tervetuloa takaisin, {currentAdminData.name}</p>
          <p className="content-font" style={DashboardHomeStyling.contentText}>Hallintapaneelin kautta pystyt muokkaamaan kätevästi uimakoulun tietoja ja myös tarpeen vaatiessa muokkaaman oman käyttäjätunnuksen tietoja esim. vaihtamaan oma salasana uuteen yms.</p>
          <p className="content-font" style={DashboardHomeStyling.contentText}>Jos tulee kysyttävää tai ehdotuksia esim. sivuston parantamisen suhteen, niin ole ilman muuta yhteydessä!</p>
        </div>
        <div>
          <img alt="userImage" src={currentAdminData.picture} className="rounded-circle shadow" style={DashboardHomeStyling.userImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
