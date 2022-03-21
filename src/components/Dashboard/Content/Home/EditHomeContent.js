import React from 'react';

const EditHomeContent = ({ handleModalChange, currentContent, currentElementContent, resetHomeContentElement, handleHomeContentChange, ...props }) => {

  const contentStyling = {
    container: {
      display: 'flex',
      flex: 1/2,
      flexDirection: 'row',
    },
    primary: {
      icon: {
        backgroundColor: 'var(--dashboard-color)',
        color: 'var(--secondary-color)',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      textArea: {
        paddingTop: 0,
        lineHeight: 2,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 9,
        borderBottomRightRadius: 9
      },
    },
  };

  const getElementData = currentContent.HomeData?.content[props.elementValue];
  const formatElementData = getElementData ? getElementData.join('\n\n') : "";

  return (
    <div className="col-12 col-md-6" style={{ marginBottom: 10 }}>
      <div style={contentStyling.container}>
        <span className="input-group-text" style={contentStyling.primary.icon}>
          <div onClick={() => resetHomeContentElement(props.elementValue)}>
            <i className="fas fa-undo"></i>
          </div>
          {!currentElementContent ?
            <div>
              <i className="fas fa-edit"></i>
            </div> :
            <div onClick={() => handleModalChange(props.elementValue)} data-bs-toggle="modal" data-bs-target="#targetHomeModal">
              <i className="fas fa-share-square"></i>
            </div>
          }
        </span>
        <textarea
          className="form-control"
          style={contentStyling.primary.textArea}
          rows="5"
          name={props.elementValue}
          value={!currentElementContent ? formatElementData : currentElementContent}
          onChange={handleHomeContentChange}
          aria-label="With textarea">
        </textarea>
      </div>
    </div>
  );
};

export default EditHomeContent;