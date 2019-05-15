import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import marked from "marked";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faCompressArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const Preview = ({value}) => {
  let divRef;

  const [isEnlarged, setIsEnlarged] = useState(false);

  useEffect(() => {
    divRef.innerHTML = marked(value);
  })

  let sectionClass = isEnlarged ? "container preview-section enlarged": 
  "container preview-section";
  
  return (
    <section 
      className={sectionClass}
      style={isEnlarged ? {marginTop: 0} : {}}
    >
      <header className="heading">
          <span className="icon"></span>
          <span>Preview</span>
          <div 
            className="fullscreen-icon-container"
            onClick={() => setIsEnlarged(!isEnlarged)}
          >
            <FontAwesomeIcon icon={isEnlarged ? faCompressArrowsAlt: faArrowsAlt} className="fullscreen-icon" />
          </div>
      </header>
      <div 
        className="preview-container" ref={el => divRef = el}
        style={isEnlarged ? {height: "80vh"}: {}}>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  value: state.value
})

export default connect(mapStateToProps, null)(Preview);