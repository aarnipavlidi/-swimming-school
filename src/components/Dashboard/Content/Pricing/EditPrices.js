import React, { useState } from 'react';
import ConfirmModal from './Modal/ConfirmModal';
import EditPriceContent from './EditPriceContent';
import PriceButton from './PriceButton';
import PriceSlider from './PriceSlider';

const EditPrices = ({ currentContent, getNotification, updateCurrentPrices, loadingUpdatePrice, updateCurrentContent, loadingUpdateContent }) => {

  // TODO: Look into "Notification" component, when user updates prices
  // and clicks the "toggle" button, it goes away smoothly, but if user
  // presses the toggle again, it appears too fast and need to fix this.
  // As of right now the notification lasts for 5 seconds, been defined
  // at "App" component with "getNotification" function.

  const elementStyling = {
    titleContainer: {
      display: 'flex',
      marginTop: 10,
      justifyContent: 'center',
    },
    titleContent: {
      padding: 10,
      fontSize: 19,
      backgroundColor: 'var(--secondary-color)',
    },
  };

  const [currentModal, setCurrentModal] = useState(null);
  const handleModalChange = (getValue) => {
    setCurrentModal(getValue)
  };

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
        status: true,
      });
    } catch (error) {
      getNotification({
        message: error.message,
        status: false,
      })
    };
  };

  const [currentElementContent, setCurrentElementContent] = useState({
    primaryElement: null,
    secondaryElement: null,
  });

  const handlePriceContentChange = (event) => {
    event.preventDefault();
    setCurrentElementContent({...currentElementContent, [event.target.name]: [event.target.value]})
  };

  const resetPriceContentElement = (getElementValue) => {
    setCurrentElementContent({...currentElementContent, [getElementValue]: null})
  };

  const submitPriceContent = async (getSourceValue, getElementValue) => {

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
        status: true,
      });
      setCurrentElementContent({...currentElementContent, [getElementValue]: null});
    } catch (error) {
      getNotification({
        message: error.message,
        status: false,
      })
    };
  };

  return (
    <div className="container" style={{ backgroundColor: 'var(--optional-secondary-color)', flex: 1/3 }}>
      <div style={elementStyling.titleContainer}>
        <p className="shadow rounded content-font" style={elementStyling.titleContent}>Hinnasto</p>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <EditPriceContent
          handleModalChange={handleModalChange}
          currentContent={currentContent}
          currentElementContent={currentElementContent.primaryElement}
          resetPriceContentElement={resetPriceContentElement}
          handlePriceContentChange={handlePriceContentChange}
          elementValue="primaryElement"
        />
        <EditPriceContent
          handleModalChange={handleModalChange}
          currentContent={currentContent}
          currentElementContent={currentElementContent.secondaryElement}
          resetPriceContentElement={resetPriceContentElement}
          handlePriceContentChange={handlePriceContentChange}
          elementValue="secondaryElement"
        />
      </div>
      <div className="row" style={{ marginTop: 25 }}>
        <PriceSlider
          currentPrice={currentPrice}
          currentContent={currentContent}
          handlePriceChange={handlePriceChange}
          sliderID="oneTimeSoloSlider"
          sliderTitle="1x45min (1 hkl.)"
          sliderInputName="oneTimeSolo"
          sliderInputValue="OneTimeSolo"
        />
        <PriceSlider
          currentPrice={currentPrice}
          currentContent={currentContent}
          handlePriceChange={handlePriceChange}
          sliderID="oneTimeDuoSlider"
          sliderTitle="1x45min (2 hkl.)"
          sliderInputName="oneTimeDuo"
          sliderInputValue="OneTimeDuo"
        />
        <PriceSlider
          currentPrice={currentPrice}
          currentContent={currentContent}
          handlePriceChange={handlePriceChange}
          sliderID="threeTimeSoloSlider"
          sliderTitle="3x45min (1 hkl.)"
          sliderInputName="threeTimeSolo"
          sliderInputValue="ThreeTimeSolo"
        />
        <PriceSlider
          currentPrice={currentPrice}
          currentContent={currentContent}
          handlePriceChange={handlePriceChange}
          sliderID="threeTimeDuoSlider"
          sliderTitle="3x45min (2 hkl.)"
          sliderInputName="threeTimeDuo"
          sliderInputValue="ThreeTimeDuo"
        />
        <PriceSlider
          currentPrice={currentPrice}
          currentContent={currentContent}
          handlePriceChange={handlePriceChange}
          sliderID="fiveTimeSoloSlider"
          sliderTitle="5x45min (1 hkl.)"
          sliderInputName="fiveTimeSolo"
          sliderInputValue="FiveTimeSolo"
        />
        <PriceSlider
          currentPrice={currentPrice}
          currentContent={currentContent}
          handlePriceChange={handlePriceChange}
          sliderID="fiveTimeDuoSlider"
          sliderTitle="5x45min (2 hkl.)"
          sliderInputName="fiveTimeDuo"
          sliderInputValue="FiveTimeDuo"
        />
      </div>
      <PriceButton setCurrentPrice={setCurrentPrice} handleModalChange={handleModalChange} loadingUpdatePrice={loadingUpdatePrice} />
      <ConfirmModal submitPricesDatabase={submitPricesDatabase} submitPriceContent={submitPriceContent} value={currentModal} valueTarget="Pricing" />
    </div>
  );
};

export default EditPrices;
