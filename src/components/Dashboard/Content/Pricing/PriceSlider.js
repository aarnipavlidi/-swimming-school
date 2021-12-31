import React from 'react';

const PriceSlider = ({ currentPrice, currentContent, handlePriceChange, ...props }) => {

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

  return (
    <div className="col-12 col-md-6">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1/2 }}>
          <label style={{ display: 'flex', alignItems: 'center', height: '100%' }} for={props.sliderID} className="form-label content-font">{props.sliderTitle}</label>
        </div>
        <div style={priceStyling.container}>
          <span className="input-group-text" style={priceStyling.value}>{!currentPrice[props.sliderInputName] ? currentContent.PricingData?.pricing[props.sliderInputValue] : currentPrice[props.sliderInputName]}</span>
          <span className="input-group-text" style={priceStyling.icon}><i className="fas fa-euro-sign"></i></span>
        </div>
      </div>
      <input name={props.sliderInputName} onChange={handlePriceChange} value={!currentPrice[props.sliderInputName] ? currentContent.PricingData?.pricing[props.sliderInputValue] : currentPrice[props.sliderInputName]} type="range" min="0" max="250" step="1" className="form-range" id={props.sliderID} />
    </div>
  );
};

export default PriceSlider;
