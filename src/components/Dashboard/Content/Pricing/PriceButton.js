import React from 'react';

const PriceButton = ({ setCurrentPrice, handleModalChange, loadingUpdatePrice }) => {

  const buttonStyling = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 25,
      marginTop: 25,
      marginBottom: 25,
    },
    button: {
      backgroundColor: 'var(--dashboard-color)'
    },
    content: {
      display: 'flex',
      gap: 10,
      color: 'var(--secondary-color)',
      alignItems: 'center'
    }
  };

  const resetPrices = () => {
    handleModalChange(null); 
    setCurrentPrice({
      oneTimeSolo: null,
      oneTimeDuo: null,
      threeTimeSolo: null,
      threeTimeDuo: null,
      fiveTimeSolo: null,
      fiveTimeDuo: null
    });
  };

  if (loadingUpdatePrice) {
    return (
      <div className="container" style={buttonStyling.container}>
        <div className="shadow" style={buttonStyling.button}>
          <button type="submit" className="btn content-font" style={buttonStyling.content} disabled>
            <span><i className="fas fa-undo"></i></span>
            <span>Palauta</span>
          </button>
        </div>
        <div className="shadow" style={buttonStyling.button}>
          <button type="submit" className="btn content-font" style={buttonStyling.content} disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span>Lähettää</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container" style={buttonStyling.container}>
      <div className="shadow" style={buttonStyling.button}>
        <button onClick={resetPrices} type="submit" className="btn content-font" style={buttonStyling.content}>
          <span><i className="fas fa-undo"></i></span>
          <span>Palauta</span>
        </button>
      </div>
      <div className="shadow" style={buttonStyling.button}>
        <button onClick={() => handleModalChange("editPricing")} type="submit" className="btn content-font" style={buttonStyling.content} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <span><i className="fas fa-edit"></i></span>
          <span>Muokkaa</span>
        </button>
      </div>
    </div>
  );
};

export default PriceButton;
