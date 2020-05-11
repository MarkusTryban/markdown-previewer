import React, { Component } from 'react';
import marked from 'marked';

class MarkdownPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
  }

  onChangeMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  render() {
    const { markdown } = this.state;

    return (
      <>
        <div id='main'>
          <h1 id='mainH1'>Markdown Previewer</h1>
          <div className='container'>
            <br />
            <br />
            <h1>Markdown Input</h1>
            <br />
            <br />
            <textarea
              id='editor'
              className='container'
              placeholder='Input Markdown Here'
              value={markdown}
              onChange={(e) => this.onChangeMarkdown(e.target.value)}
            />
          </div>
          <br />
          <br />
          <h1>Markdown Output</h1>
          <br />
          <br />
          <div
            id='preview'
            className='container'
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </>
    );
  }
}

export default MarkdownPreview;
