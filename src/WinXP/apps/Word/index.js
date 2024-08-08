import React, { useState } from 'react';
import styled from 'styled-components';
import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';

function Word({ onClose }) {
  const [pdfUrl] = useState('https://pdfobject.com/pdf/sample.pdf');

  function onClickOptionItem(item) {
    switch (item) {
      case 'Close':
        onClose();
        break;
      default:
    }
  }

  return (
    <Div>
      <section className="word__toolbar">
        <div className="word__options">
          <WindowDropDowns
            items={dropDownData}
            onClickItem={onClickOptionItem}
            height={21}
          />
        </div>
      </section>
      <section className="word__function_bar">
        {/* You can add function bar buttons here if needed */}
      </section>
      <section className="word__function_bar">
        {/* This is the new toolbar */}
        {/* You can add additional function bar buttons here if needed */}
      </section>
      <div className="word__content">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: #c3daf9;

  .word__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }

  .word__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }

  .word__function_bar {
    height: 24px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, #dcebfe, #81a9e2);
  }

  .word__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }
`;

export default Word;
