import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';
import DOMPurify from 'dompurify'; // You may need to install this package

export default function Notepad({ onClose }) {
  const [content, setContent] = useState('');
  const [wordWrap, setWordWrap] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    fetch('/content')
      .then(response => response.text())
      .then(html => {
        // Sanitize the HTML to prevent XSS attacks
        const sanitizedHtml = DOMPurify.sanitize(html);
        setContent(sanitizedHtml);
      })
      .catch(error => console.error('Error loading content:', error));
  }, []);

  function onClickOptionItem(item) {
    switch (item) {
      case 'Exit':
        onClose();
        break;
      case 'Word Wrap':
        setWordWrap(!wordWrap);
        break;
      default:
    }
  }

  return (
    <Div>
      <section className="np__toolbar">
        <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} />
      </section>
      <ContentWrapper>
        <Content
          wordWrap={wordWrap}
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </ContentWrapper>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
    background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  }
`;

const ContentWrapper = styled.div`
  flex: auto;
  background-color: white;
  border: 1px solid #96abff;
  overflow: hidden;
`;

const Content = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 2px;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  white-space: ${props => (props.wordWrap ? 'normal' : 'pre-wrap')};
  overflow-x: ${props => (props.wordWrap ? 'hidden' : 'scroll')};
  cursor: text;
  outline: none;
`;
