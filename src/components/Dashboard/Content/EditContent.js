import React, { useState } from 'react';
import EditFooter from './Footer/EditFooter';
import EditHome from './Home/EditHome';
import EditPrices from './Pricing/EditPrices';

import Notification from '../../Notification';

import '../../../css/Dashboard.css';
import useUpdateContent from '../../../hooks/useUpdateContent';
import useUpdatePricing from '../../../hooks/useUpdatePricing';

const EditContent = ({ currentContent, notificationMessage, notificationStatus, getNotification, collapseStatus }) => {

  const [updateCurrentContent, { loadingUpdateContent }] = useUpdateContent();
  const [updateCurrentPrices, { loadingUpdatePrice }] = useUpdatePricing();

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
      />
      <EditFooter
        currentContent={currentContent}
        getNotification={getNotification}
        updateCurrentContent={updateCurrentContent}
        loadingUpdateContent={loadingUpdateContent}
      />
    </div>
  );
};

export default EditContent;
