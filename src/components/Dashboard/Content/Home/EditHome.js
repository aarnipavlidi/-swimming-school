import React, { useState } from 'react';
import ConfirmModal from './Modal/ConfirmModal';
import EditHomeContent from './EditHomeContent';

const EditHome = ({ currentContent, getNotification, updateCurrentContent, loadingUpdateContent }) => {

  const elementStyling = {
    titleContainer: {
      display: 'flex',
      marginTop: 10,
      justifyContent: 'center'
    },
    titleContent: {
      padding: 10,
      fontSize: 19,
      backgroundColor: 'var(--secondaray-color)'
    },
  };

  const [currentModal, setCurrentModal] = useState(null);
  const handleModalChange = (getValue) => {
    setCurrentModal(getValue)
  };

  const [currentElementContent, setCurrentElementContent] = useState({
    primaryElement: null,
  });

  const handleHomeContentChange = (event) => {
    event.preventDefault();
    setCurrentElementContent({...currentElementContent, [event.target.name]: [event.target.value]});
  };

  const resetHomeContentElement = (getElementValue) => {
    setCurrentElementContent({...currentElementContent, [getElementValue]: null});
  };

  const submitHomeContent = async (getSourceValue, getElementValue) => {

    const getElementData = [...currentElementContent[getElementValue]];
    const formatElementData = getElementData[0].split(/[\n]+/);
    const filterElementData = formatElementData.filter(results => results);

    const sourceData = getSourceValue;
    const elementData = getElementValue;
    const elementValueData = filterElementData;

    try {
      const response = await updateCurrentContent({ sourceData, elementData, elementValueData });
      getNotification({
        message: response.updateContent.response,
        status: true
      });
      setCurrentElementContent({...currentElementContent, [getElementValue]: null});
    } catch (error) {
      getNotification({
        message: error.message,
        status: false
      })
    };
  };

  return (
    <div className="container" style={{ flex: 1/3 }}>
      <div style={elementStyling.titleContainer}>
        <p className="shadow rounded content-font" style={elementStyling.titleContent}>Etusivu</p>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <EditHomeContent
          handleModalChange={handleModalChange}
          currentContent={currentContent}
          currentElementContent={currentElementContent.primaryElement}
          resetHomeContentElement={resetHomeContentElement}
          handleHomeContentChange={handleHomeContentChange}
          elementValue="primaryElement"
        />
      </div>
      <ConfirmModal submitHomeContent={submitHomeContent} value={currentModal} valueTarget="Home" />
    </div>
  );
};

export default EditHome;
