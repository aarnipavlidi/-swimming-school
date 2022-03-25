import React, { useState } from 'react';
import EditFooter from './Footer/EditFooter';
import EditHome from './Home/EditHome';
import EditPrices from './Pricing/EditPrices';

import Notification from '../../Notification';

import '../../../css/Dashboard.css';
import useUpdateContent from '../../../hooks/useUpdateContent';
import useUpdatePricing from '../../../hooks/useUpdatePricing';
import useUpdateLocation from '../../../hooks/updateUpdateLocation';
import useUpdateEmail from '../../../hooks/useUpdateEmail';
import useUpdatePhoneNumber from '../../../hooks/useUpdatePhoneNumber';

const EditContent = ({ currentContent, notificationMessage, notificationStatus, getNotification, collapseStatus, containerPosition }) => {

  const [updateCurrentContent, { loadingUpdateContent }] = useUpdateContent();
  const [updateCurrentPrices, { loadingUpdatePrice }] = useUpdatePricing();
  const [updateCurrentLocation, { loadingUpdateLocation }] = useUpdateLocation();
  const [updateCurrentEmail, { loadingUpdateEmail }] = useUpdateEmail();
  const [updateCurrentPhoneNumber, { loadingUpdatePhoneNumber }] = useUpdatePhoneNumber();

  return (
    <div className="dashboard-container" style={collapseStatus ? { overflowY: 'hidden' } : { overflowY: 'auto' }}>
      <Notification message={notificationMessage} checkStatus={notificationStatus} />
      <EditHome
        currentContent={currentContent}
        getNotification={getNotification}
        updateCurrentContent={updateCurrentContent}
        loadingUpdateContent={loadingUpdateContent}
      />
      <EditPrices
        currentContent={currentContent}
        getNotification={getNotification}
        updateCurrentPrices={updateCurrentPrices}
        loadingUpdatePrice={loadingUpdatePrice}
        updateCurrentContent={updateCurrentContent}
        loadingUpdateContent={loadingUpdateContent}
        containerPosition={containerPosition}
      />
      <EditFooter
        currentContent={currentContent.FooterData}
        getNotification={getNotification}
        updateCurrentLocation={updateCurrentLocation}
        loadingUpdateLocation={loadingUpdateLocation}
        updateCurrentEmail={updateCurrentEmail}
        loadingUpdateEmail={loadingUpdateEmail}
        updateCurrentPhoneNumber={updateCurrentPhoneNumber}
        loadingUpdatePhoneNumber={loadingUpdatePhoneNumber}
        containerPosition={containerPosition}
      />
    </div>
  );
};

export default EditContent;
