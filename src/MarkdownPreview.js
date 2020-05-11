import React, { Component } from 'react';

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
      <div id='main'>
        <h1>Markdown Previewer</h1>
        <div className='containers'>
          <div className='container'>
            <textarea id='editor' className='container' />
          </div>
          <div id='preview' className='container'>
            {markdown}
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownPreview;
