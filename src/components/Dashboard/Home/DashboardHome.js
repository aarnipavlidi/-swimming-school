import React from 'react';
import { DashboardHomeStyling } from './DashboardHomeStyling';

const Dashboard = ({ currentAdminData, containerPosition }) => {

  console.log(currentAdminData)

  return (
    <div className={containerPosition ? "container content-container-behind" : "container"} style={DashboardHomeStyling.mainContainer}>


      <div style={DashboardHomeStyling.welcomeContainer}>
        <h2>Tervetuloa takaisin, {currentAdminData.name}</h2>
        <img src={currentAdminData.picture} className="rounded" style={DashboardHomeStyling.userImage}></img>
      </div>



    </div>
  );
};

export default Dashboard;
