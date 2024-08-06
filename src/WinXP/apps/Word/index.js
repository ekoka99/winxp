import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';
import windows from 'assets/windowsIcons/windows.png';

function Word({ onClose }) {
  const [pdfUrl, setPdfUrl] = useState('https://pdfobject.com/pdf/sample.pdf');

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
        <img className="word__windows-logo" src={windows} alt="windows" />
      </section>
      <section className="word__function_bar">
        {/* You can add function bar buttons here if needed */}
      </section>
      <section className="word__address_bar">
        <div className="word__address_bar__title">Address</div>
        <div className="word__address_bar__content">
          <input
            type="text"
            value={pdfUrl}
            onChange={e => setPdfUrl(e.target.value)}
            className="word__address_bar__input"
          />
        </div>
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
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

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
  .word__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .word__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .word__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .word__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .word__address_bar__content {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .word__address_bar__input {
    width: 100%;
    height: 100%;
    border: rgba(122, 122, 255, 0.6) 1px solid;
    padding: 0 5px;
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
