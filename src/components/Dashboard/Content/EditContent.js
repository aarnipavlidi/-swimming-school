import React, { useState } from 'react';
import EditPrices from './Pricing/EditPrices';

import '../../../css/Dashboard.css';
import useUpdateContent from '../../../hooks/useUpdateContent';
import useUpdatePricing from '../../../hooks/useUpdatePricing';

const EditContent = ({ currentContent, notificationMessage, notificationStatus, getNotification, collapseStatus }) => {

  const [updateCurrentContent, { loadingUpdateContent }] = useUpdateContent();
  const [updateCurrentPrices, { loadingUpdatePrice }] = useUpdatePricing();

  return (
    <div className="dashboard-container" style={collapseStatus ? { overflowY: 'hidden' } : { overflowY: 'auto' }}>
      <EditPrices
        currentContent={currentContent}
        notificationMessage={notificationMessage}
        notificationStatus={notificationStatus}
        getNotification={getNotification}
        updateCurrentPrices={updateCurrentPrices}
        loadingUpdatePrice={loadingUpdatePrice}
        updateCurrentContent={updateCurrentContent}
        loadingUpdateContent={loadingUpdateContent}
      />
    </div>
  );
};

export default EditContent;
