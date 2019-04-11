import React from "react";

const Editor = () => {
  return (
    <section className="container">
      <div className="editor">
        <header className="editor__heading heading">
          <span className="fire-icon" />
          <span className="editor__title">Editor</span>
          <span className="fullscreen-icon" />
        </header>
        <div className="editor__edit-field">
          <label htmlFor="field"></label>
          <textarea 
            name="content" 
            value="enter something" 
            id="field"
            className="editor__text-area">
          </textarea>
        </div>
      </div>
    </section>
  );
};

export default Editor;
