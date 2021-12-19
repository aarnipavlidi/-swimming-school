import React, { useState } from 'react';
import useUpdatePricing from '../../hooks/useUpdatePricing';

const EditContent = ({ collapseStatus, currentContent }) => {

  const [currentPrice, setCurrentPrice] = useState({
    oneTimeSolo: null,
    oneTimeDuo: null,
    threeTimeSolo: null,
    threeTimeDuo: null,
    fiveTimeSolo: null,
    fiveTimeDuo: null
  });

  const testi = 91;

  const containerStyling = collapseStatus ? {
    display: 'none',
    transition: '0.5s'
  } : {
    display: 'flex',
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
  };

  const handlePriceChange = (event) => {
    event.preventDefault();
    setCurrentPrice({ ...currentPrice, [event.target.name]: event.target.value })
  };

  return (
    <div style={containerStyling}>
      <div className="container" style={{ backgroundColor: 'var(--optional-secondary-color)', flex: 1/3 }}>
        <div style={{ display: 'flex', marginTop: 10, justifyContent: 'center' }}>
          <p className="shadow-lg rounded content-font" style={{ padding: 10, fontSize: 19, backgroundColor: 'var(--secondary-color)' }}>Hinnasto</p>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="oneTimeSoloSlider" className="form-label content-font">1x45min (1 hkl.)</label>
              </div>
              <div className="input-group" style={{ flex: 1/2, justifyContent: 'flex-end' }}>
                <span className="input-group-text">{!currentPrice.oneTimeSolo ? currentContent.PricingData.pricing.OneTimeSolo : currentPrice.oneTimeSolo}</span>
                <span className="input-group-text"><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="oneTimeSolo" onChange={handlePriceChange} value={!currentPrice.oneTimeSolo ? currentContent.PricingData.pricing.OneTimeSolo : currentPrice.oneTimeSolo} type="range" min="0" max="250" step="1" className="form-range" id="oneTimeSoloSlider" />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="oneTimeDuoSlider" className="form-label content-font">1x45min (2 hkl.)</label>
              </div>
              <div className="input-group" style={{ flex: 1/2, justifyContent: 'flex-end' }}>
                <span className="input-group-text">{!currentPrice.oneTimeDuo ? currentContent.PricingData.pricing.OneTimeDuo : currentPrice.oneTimeDuo}</span>
                <span className="input-group-text"><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="oneTimeDuo" onChange={handlePriceChange} value={!currentPrice.oneTimeDuo ? currentContent.PricingData.pricing.OneTimeDuo : currentPrice.oneTimeDuo} type="range" min="0" max="250" step="1" className="form-range" id="oneTimeDuoSlider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContent;
