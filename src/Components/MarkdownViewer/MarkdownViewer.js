import React, { Component } from 'react';
import { Provider } from "react-redux";
import './MarkdownViewer.css';
import Editor from "../Editor";
import Previewer from "../Previewer";
import store from "../../Containers/store";
import "../../../node_modules/@fortawesome/fontawesome-free/js/all";

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

export default () => (
  <Provider store={store}>
   <MarkdownViewer />
  </Provider>
);
