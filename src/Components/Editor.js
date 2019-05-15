import React, { useState } from "react";
import { connect } from "react-redux";
import putTextAreaValue from "../Actions/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';


const Editor = ({ value, onChange }) => {
  
  const [isEnlarged, setIsEnlarged] = useState(false);
  console.log(isEnlarged);

  return (
    <section className={isEnlarged ? "container enlarged": "container"}>
      <div className="editor">
        <header className="editor__heading heading">
          <span className="fire-icon" />
          <span className="editor__title" >Editor</span>
          <div 
            className="fullscreen-icon-container"
            onClick={() => setIsEnlarged(!isEnlarged)}
          >
            <FontAwesomeIcon icon={isEnlarged ? faCompressArrowsAlt: faArrowsAlt} className="fullscreen-icon" />
          </div>
        </header>
        <div className="editor__edit-field">
          <label htmlFor="field"></label>
          <textarea 
            name="content" 
            value={value} 
            onChange={onChange}
            id="field"
            className="editor__text-area"
            style={isEnlarged ? {resize: "none", height: "80vh"}: {}}>
          </textarea>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  value: state.value
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(putTextAreaValue(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
