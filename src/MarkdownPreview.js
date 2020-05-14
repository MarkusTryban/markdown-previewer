import React, { Component } from 'react';
import marked from 'marked';
import Placeholder from './Placeholder';

marked.setOptions({ breaks: true });

class MarkdownPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: Placeholder(),
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
                value={markdown}
                onChange={(e) => this.onChangeMarkdown(e.target.value)}
              />
            </div>
            <div className='container'>
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
        <div className='footer'>
          by{' '}
          <a
            href='https://markustryban.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Markus Tryban
          </a>
        </div>
      </>
    );
  }
}

export default MarkdownPreview;
