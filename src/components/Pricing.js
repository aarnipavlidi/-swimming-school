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
          <div className="row">
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
          <div className="row">
            <div className="col-md text-start">
              <p className="content-font">Yhden (1) yksityistunnin kesto on oletuksena 45 minuuttia kerrallaan. Opetuspaikkana toimii Oulun uimahalli.</p>
              <p className="content-font">Tunnit laskutetaan asiakkaalta jälkikäteen sähköpostitse lähettävällä laskulla. Hintaan sisältyy opetus ja uimarin vakuutus uinnin ajaksi.</p>
              <p className="content-font">Hintaan ei sisälly uimahallin sisäänpääsymaksu, vaan se maksetaan normaaliin tapaan uimahallin kassalla.</p>
            </div>
            <div className="col-md text-start">
              <p className="content-font">Mikäli tulee esteitä, niin yksityistunnin voi perua veloituksetta viimeistään kaksi (2) vuorokautta ennen sovitun tunnin alkua. Muussa tapauksessa veloitamme tunnista täyden hinnan.</p>
              <p className="content-font">Uimakoulu Oy pidättää oikeuden perua tunnin esim. ohjaajan sairastuessa.</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Pricing;
