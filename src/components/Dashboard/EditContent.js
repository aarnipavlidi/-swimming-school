import React, { useState } from 'react';


const EditContent = () => {

  const [currentPrice, setCurrentPrice] = useState({
    One_time_solo: null
  })

  const testi = 91;

  const handlePriceChange = (event) => {
    event.preventDefault();
    setCurrentPrice({ ...currentPrice, [event.target.name]: event.target.value })
  };

  return (
    <div style={{ display: 'flex', flex: 1, marginTop: 50, flexDirection: 'column' }}>

      <div className="container" style={{ backgroundColor: 'var(--optional-secondary-color)', flex: 1/3 }}>

        <div style={{ display: 'flex', marginTop: 10, justifyContent: 'center' }}>
          <p className="shadow-lg rounded content-font" style={{ padding: 10, fontSize: 19, backgroundColor: 'var(--secondary-color)' }}>Hinnasto</p>
        </div>

        <div>
          <label for="customRange1" className="form-label">{!currentPrice.One_time_solo ? testi : currentPrice.One_time_solo}</label>
          <input name="One_time_solo" onChange={handlePriceChange} value={!currentPrice.One_time_solo ? testi : currentPrice.One_time_solo} type="range" min="0" max="250" step="1" className="form-range" id="customRange1" />
        </div>

      </div>

    </div>
  );
};

export default EditContent;
