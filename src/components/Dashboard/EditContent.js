import React, { useState } from 'react';
import PriceButton from './PriceButton';
import Notification from '../Notification';
import useUpdatePricing from '../../hooks/useUpdatePricing';

const EditContent = ({ currentContent, notificationMessage, notificationStatus, getNotification, collapseStatus }) => {

  const [updateCurrentPrices, { loadingUpdatePrice }] = useUpdatePricing();
  const [currentPrice, setCurrentPrice] = useState({
    oneTimeSolo: null,
    oneTimeDuo: null,
    threeTimeSolo: null,
    threeTimeDuo: null,
    fiveTimeSolo: null,
    fiveTimeDuo: null
  });

  const handlePriceChange = (event) => {
    event.preventDefault();
    setCurrentPrice({ ...currentPrice, [event.target.name]: event.target.value })
  };

  const submitPricesDatabase = async () => {
    const oneTimeSolo = currentPrice.oneTimeSolo ? currentPrice.oneTimeSolo : currentContent.PricingData.pricing.OneTimeSolo;
    const oneTimeDuo = currentPrice.oneTimeDuo ? currentPrice.oneTimeDuo : currentContent.PricingData.pricing.OneTimeDuo;
    const threeTimeSolo = currentPrice.threeTimeSolo ? currentPrice.threeTimeSolo : currentContent.PricingData.pricing.ThreeTimeSolo;
    const threeTimeDuo = currentPrice.threeTimeDuo ? currentPrice.threeTimeDuo : currentContent.PricingData.pricing.ThreeTimeDuo;
    const fiveTimeSolo = currentPrice.fiveTimeSolo ? currentPrice.fiveTimeSolo : currentContent.PricingData.pricing.FiveTimeSolo;
    const fiveTimeDuo = currentPrice.fiveTimeDuo ? currentPrice.fiveTimeDuo : currentContent.PricingData.pricing.FiveTimeDuo;

    try {
      const response = await updateCurrentPrices({ oneTimeSolo, oneTimeDuo, threeTimeSolo, threeTimeDuo, fiveTimeSolo, fiveTimeDuo });
      getNotification({
        message: response.updatePricing.response,
        status: true
      });
    } catch (error) {
      getNotification({
        message: error.message,
        status: false
      })
    };
  };

  const containerStyling = {
    display: 'flex',
    flex: 1,
    marginTop: 50,
    flexDirection: 'column'
  };

  // When using "input-group" class from Bootstrap, the "div" element is being
  // rendered too fast, when user is able to toggle the links visible and off.
  // So if user is at "EditContent" component and sees the different links and
  // presses the "toggle" button (which causes the links go away), then the element
  // which shows the price and "€" icon too fast, which did not make any sense
  // to me and it did not looked good! Had to improvise and add custom CSS, which
  // looked similar to original class styling. Need to check later, what causes
  // this problem and possible get back to using original class?
  const priceStyling = {
    container: {
      display: 'flex',
      flex: 1/2, flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    value: {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    icon: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    },
  };

  // TODO: Look into "Notification" component, when user updates prices
  // and clicks the "toggle" button, it goes away smoothly, but if user
  // presses the toggle again, it appears too fast and need to fix this.
  // As of right now the notification lasts for 5 seconds, been defined
  // at "App" component with "getNotification" function.

  return (
    <div style={containerStyling}>
      <div className="container" style={{ backgroundColor: 'var(--optional-secondary-color)', flex: 1/3 }}>
        <Notification message={notificationMessage} checkStatus={notificationStatus} collapseStatus={collapseStatus} />
        <div style={{ display: 'flex', marginTop: 10, justifyContent: 'center' }}>
          <p className="shadow rounded content-font" style={{ padding: 10, fontSize: 19, backgroundColor: 'var(--secondary-color)' }}>Hinnasto</p>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="oneTimeSoloSlider" className="form-label content-font">1x45min (1 hkl.)</label>
              </div>
              <div style={priceStyling.container}>
                <span className="input-group-text" style={priceStyling.value}>{!currentPrice.oneTimeSolo ? currentContent.PricingData.pricing.OneTimeSolo : currentPrice.oneTimeSolo}</span>
                <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="oneTimeSolo" onChange={handlePriceChange} value={!currentPrice.oneTimeSolo ? currentContent.PricingData.pricing.OneTimeSolo : currentPrice.oneTimeSolo} type="range" min="0" max="250" step="1" className="form-range" id="oneTimeSoloSlider" />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="oneTimeDuoSlider" className="form-label content-font">1x45min (2 hkl.)</label>
              </div>
              <div style={priceStyling.container}>
                <span className="input-group-text" style={priceStyling.value}>{!currentPrice.oneTimeDuo ? currentContent.PricingData.pricing.OneTimeDuo : currentPrice.oneTimeDuo}</span>
                <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="oneTimeDuo" onChange={handlePriceChange} value={!currentPrice.oneTimeDuo ? currentContent.PricingData.pricing.OneTimeDuo : currentPrice.oneTimeDuo} type="range" min="0" max="250" step="1" className="form-range" id="oneTimeDuoSlider" />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="threeTimeSoloSlider" className="form-label content-font">3x45min (1 hkl.)</label>
              </div>
              <div style={priceStyling.container}>
                <span className="input-group-text" style={priceStyling.value}>{!currentPrice.threeTimeSolo ? currentContent.PricingData.pricing.ThreeTimeSolo : currentPrice.threeTimeSolo}</span>
                <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="threeTimeSolo" onChange={handlePriceChange} value={!currentPrice.threeTimeSolo ? currentContent.PricingData.pricing.ThreeTimeSolo : currentPrice.threeTimeSolo} type="range" min="0" max="250" step="1" className="form-range" id="threeTimeSoloSlider" />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="threeTimeDuoSlider" className="form-label content-font">3x45min (2 hkl.)</label>
              </div>
              <div style={priceStyling.container}>
                <span className="input-group-text" style={priceStyling.value}>{!currentPrice.threeTimeDuo ? currentContent.PricingData.pricing.ThreeTimeDuo : currentPrice.threeTimeDuo}</span>
                <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="threeTimeDuo" onChange={handlePriceChange} value={!currentPrice.threeTimeDuo ? currentContent.PricingData.pricing.ThreeTimeDuo : currentPrice.threeTimeDuo} type="range" min="0" max="250" step="1" className="form-range" id="threeTimeDuoSlider" />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="fiveTimeSoloSlider" className="form-label content-font">5x45min (1 hkl.)</label>
              </div>
              <div style={priceStyling.container}>
                <span className="input-group-text" style={priceStyling.value}>{!currentPrice.fiveTimeSolo ? currentContent.PricingData.pricing.FiveTimeSolo : currentPrice.fiveTimeSolo}</span>
                <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="fiveTimeSolo" onChange={handlePriceChange} value={!currentPrice.fiveTimeSolo ? currentContent.PricingData.pricing.FiveTimeSolo : currentPrice.fiveTimeSolo} type="range" min="0" max="250" step="1" className="form-range" id="fiveTimeSoloSlider" />
          </div>
          <div className="col-12 col-md-6">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1/2 }}>
                <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for="fiveTimeDuoSlider" className="form-label content-font">5x45min (2 hkl.)</label>
              </div>
              <div style={priceStyling.container}>
                <span className="input-group-text" style={priceStyling.value}>{!currentPrice.fiveTimeDuo ? currentContent.PricingData.pricing.FiveTimeDuo : currentPrice.fiveTimeDuo}</span>
                <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
              </div>
            </div>
            <input name="fiveTimeDuo" onChange={handlePriceChange} value={!currentPrice.fiveTimeDuo ? currentContent.PricingData.pricing.FiveTimeDuo : currentPrice.fiveTimeDuo} type="range" min="0" max="250" step="1" className="form-range" id="fiveTimeDuoSlider" />
          </div>
        </div>
        <PriceButton setCurrentPrice={setCurrentPrice} submitPricesDatabase={submitPricesDatabase} loadingUpdatePrice={loadingUpdatePrice} />
      </div>
    </div>
  );
};

export default EditContent;
