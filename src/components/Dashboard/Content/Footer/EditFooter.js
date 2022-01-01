import React from 'react';

const EditFooter = ({ currentContent }) => {

  const elementStyling = {
    titleContainer: {
      display: 'flex',
      marginTop: 10,
      justifyContent: 'center',
    },
    titleContent: {
      padding: 10,
      fontSize: 19,
      backgroundColor: 'var(--secondary-color)',
    },
  };

  return (
    <div className="container" style={{ flex: 1/3 }}>
      <div style={elementStyling.titleContainer}>
        <p className="shadow rounded content-font" style={elementStyling.titleContent}>Yhteystiedot</p>
      </div>
    </div>
  );
};

export default EditFooter;
