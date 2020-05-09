import React, { Component } from 'react';

class MarkdownPreview extends Component {
  render() {
    return (
      <div id='main'>
        <div className='containers'>
          <div className='container'>
            <textarea id='editor' className='container'></textarea>
          </div>
          <div id='preview' className='container'></div>
        </div>
      </div>
    );
  }
}
