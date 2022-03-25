import React from "react";

import { EditFooterLocationContainer } from '../Styling/EditFooterStyling';

const ButtonLocation = ({ checkLocationStatus, setCurrentLocation, handleModalChange, loadingUpdateLocation }) => {

  const resetLocationInput = () => {
    handleModalChange(null);
    setCurrentLocation({
      address: null,
      postalCode: null,
      city: null,
    })
  };

  if (loadingUpdateLocation) {
    return (
      <div className="container" style={EditFooterLocationContainer.buttonContainer}>
        <div className="shadow" style={EditFooterLocationContainer.button}>
          <button disabled className="btn content-font" style={EditFooterLocationContainer.content}>
            <span><i className="fas fa-undo"></i></span>
            <span>Palauta</span>
          </button>
        </div>
        <div className="shadow" style={EditFooterLocationContainer.button}>
          <button disabled className="btn content-font" style={EditFooterLocationContainer.content}>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span>Lähettää</span>
          </button>
        </div>
      </div>
    );
  };

  if (checkLocationStatus) {
    return (
      <div className="container" style={EditFooterLocationContainer.buttonContainer}>
        <div className="shadow" style={EditFooterLocationContainer.button}>
          <button disabled className="btn content-font" style={EditFooterLocationContainer.content}>
            <span><i className="fas fa-undo"></i></span>
            <span>Palauta</span>
          </button>
        </div>
        <div className="shadow" style={EditFooterLocationContainer.button}>
          <button disabled className="btn content-font" style={EditFooterLocationContainer.content}>
            <span><i className="fas fa-edit"></i></span>
            <span>Muokkaa</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container" style={EditFooterLocationContainer.buttonContainer}>
      <div className="shadow" style={EditFooterLocationContainer.button}>
        <button onClick={resetLocationInput} type="submit" className="btn content-font" style={EditFooterLocationContainer.content}>
          <span><i className="fas fa-undo"></i></span>
          <span>Palauta</span>
        </button>
      </div>
      <div className="shadow" style={EditFooterLocationContainer.button}>
        <button onClick={() => handleModalChange("footerLocation")} type="submit" className="btn content-font" style={EditFooterLocationContainer.content} data-bs-toggle="modal" data-bs-target="#targetFooterModal">
          <span><i className="fas fa-edit"></i></span>
          <span>Muokkaa</span>
        </button>
      </div>
    </div>
  )
};

export default ButtonLocation;