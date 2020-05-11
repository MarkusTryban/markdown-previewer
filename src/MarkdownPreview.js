import React, { Component } from 'react';
import marked from 'marked';
import { findByLabelText } from '@testing-library/react';

const markdownTest = ' ### Headers # Header 1';

class MarkdownPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: markdownTest,
    };
  }

  render() {
    const { markdown } = this.state;

    return (
      <>
        <div id='main'>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            Markdown Previewer
          </h1>
          <div className='containers'>
            <div className='container'>
              <br />
              <br />
              <h1>Markdown Iput</h1>
              <br />
              <br />
              <textarea
                id='editor'
                className='container'
                placeholder='Input Markdown Here'
              />
            </div>
            <br />
            <br />
            <h1>Markdown Output</h1>
            <br />
            <br />
            <div id='preview' className='container'>
              {markdown}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MarkdownPreview;
