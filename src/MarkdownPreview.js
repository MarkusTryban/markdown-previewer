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
        <header className='header'>
          <h1>Markdown Previewer</h1>
        </header>
        <div id='main'>
          <div className='containers'>
            <div className='container'>
              <div className='label'>
                <span>Markdown Input</span>
              </div>
              <textarea
                id='editor'
                className='textInput'
                placeholder='Input Markdown Here'
                value={markdown}
                onChange={(e) => this.onChangeMarkdown(e.target.value)}
              />
              <div className='label'>
                <span>Markdown Output</span>
              </div>
              <div
                id='preview'
                className='textOutput'
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MarkdownPreview;
