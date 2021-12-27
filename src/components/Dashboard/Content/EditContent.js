import React, { useState } from 'react';
import EditContact from './EditContact';
import EditPrices from './EditPrices';

import '../../../css/Dashboard.css';
import useUpdatePricing from '../../../hooks/useUpdatePricing';

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

  return (
    <div className="dashboard-container" style={collapseStatus ? { overflowY: 'hidden' } : { overflowY: 'auto' }}>
      <EditContact
      />
      <EditPrices
        currentContent={currentContent}
        currentPrice={currentPrice}
        setCurrentPrice={setCurrentPrice}
        notificationMessage={notificationMessage}
        notificationStatus={notificationStatus}
        handlePriceChange={handlePriceChange}
        submitPricesDatabase={submitPricesDatabase}
        loadingUpdatePrice={loadingUpdatePrice}
      />
    </div>
  );
};

export default EditContent;
