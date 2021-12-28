import React, { useState } from 'react';

const EditContact = () => {

  const [currentContent, setCurrentContent] = useState({
    primaryElement: []
  });

  const contentStyling = {
    container: {
      display: 'flex',
      flex: 1/2,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  };

  const placeholderTextArea = 'Muokkaa hinnaston ensimmäistä elementtiä:\n\nMuista, että jos haluat uuden "<p>" elementin, niin jokainen erillinen "enter" klikkaus lisää uuden kappaleen.';
  const getData = [...currentContent.primaryElement];
  const changeData = getData[0]?.split(/[\n,]+/);

  const handlePriceContentChange = (event) => {
    event.preventDefault();
    setCurrentContent({ ...currentContent, [event.target.name]: [event.target.value]})
  };

  return (
    <div className="container" style={{ flex: 1/3 }}>
      <div style={contentStyling.container}>
        <span className="input-group-text">With textarea</span>
        <textarea rows="5" placeholder={placeholderTextArea} name="primaryElement" value={currentContent.primaryElement} onChange={handlePriceContentChange} className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  )
};

export default EditContact;
