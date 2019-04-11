import React, { Component } from 'react';
import './MarkdownViewer.css';
import Editor from "./Editor";
import Previewer from "./Previewer";

class MarkdownViewer extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Editor />
        <Previewer />
      </div>
    );
  }
}

export default MarkdownViewer;
