import React from 'react';

const Dashboard = ({ loading }) => {

  const loadingStyling = {
    backgroundColor: '#60b4bd',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const loadingSpinner = {
    color: '#FFFFFE',
    width: 50,
    height: 50
  };

  if (loading) {
    return (
      <div style={loadingStyling}>
        <div className="spinner-border" style={loadingSpinner}></div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Olet kirjautunut :D</h1>
    </div>
  );
};

export default Dashboard;
