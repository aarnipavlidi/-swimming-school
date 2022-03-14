import React from 'react';
import '../css/LoadingSpinner.css';

const Pricing = ({ currentContent, loadingContent }) => {

  if (loadingContent) {
    return (
      <div className="loadingBackground">
        <div className="spinner-border loadingSpinner"></div>
      </div>
    )
  };

  return (
    <div style={{ flex: 1, marginTop: 20, marginBottom: 20 }} className="container d-flex">
      <div className="align-self-center">
        <h2 style={{ textAlign: 'left' }} className="title-font">Hinnasto</h2>
          <div className="row" id="pricingContainer">
            <div className="col-md text-start">
              <p className="content-font">Hinnat 1 hlö: (Huom. ei sisällä uimahallin sisäänpääsyä)</p>
              <div className="text-center">
                <p className="content-font">1x45min {currentContent.PricingData?.pricing.OneTimeSolo} €</p>
                <p className="content-font">3x45min {currentContent.PricingData?.pricing.ThreeTimeSolo} €</p>
                <p className="content-font">5x45min {currentContent.PricingData?.pricing.FiveTimeSolo} €</p>
              </div>
            </div>
            <div className="col-md text-start">
              <p className="content-font">Hinnat 2 hlö: (Huom. ei sisällä uimahallin sisäänpääsyä)</p>
              <div className="text-center">
                <p className="content-font">1x45min {currentContent.PricingData?.pricing.OneTimeDuo} €</p>
                <p className="content-font">3x45min {currentContent.PricingData?.pricing.ThreeTimeDuo} €</p>
                <p className="content-font">5x45min {currentContent.PricingData?.pricing.FiveTimeDuo} €</p>
              </div>
            </div>
          </div>
          <hr className="custom-horizontal-line" />
          <div className="row" id="contentContainer">
            <div className="col-md text-start">
              {currentContent.PricingData?.content.primaryElement.map(result => {
                return <p className="content-font">{result}</p>
              })}
            </div>
            <div className="col-md text-start">
              {currentContent.PricingData?.content.secondaryElement.map(result => {
                return <p className="content-font">{result}</p>
              })}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Pricing;
