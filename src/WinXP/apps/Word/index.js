import React, { useState } from 'react';
import styled from 'styled-components';
import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';

// Import all icons
import AlignLeft from 'assets/windowsIcons/word-icons(16x16)/AlignLeft.png';
import AlignMiddle from 'assets/windowsIcons/word-icons(16x16)/AlignMiddleExcel.png';
import AlignRight from 'assets/windowsIcons/word-icons(16x16)/AlignRight.png';
import Bold from 'assets/windowsIcons/word-icons(16x16)/Bold.png';
import BorderOutside from 'assets/windowsIcons/word-icons(16x16)/BorderOutside.png';
import Bullets from 'assets/windowsIcons/word-icons(16x16)/Bullets.png';
import Copy from 'assets/windowsIcons/word-icons(16x16)/Copy.png';
import Cut from 'assets/windowsIcons/word-icons(16x16)/Cut.png';
import DrawingCanvas from 'assets/windowsIcons/word-icons(16x16)/DrawingCanvasInsert.png';
import FileOpen from 'assets/windowsIcons/word-icons(16x16)/FileOpen.png';
import FilePermission from 'assets/windowsIcons/word-icons(16x16)/FilePermission.png';
import FilePrint from 'assets/windowsIcons/word-icons(16x16)/FilePrint.png';
import FilePrintPreview from 'assets/windowsIcons/word-icons(16x16)/FilePrintPreview.png';
import FormatNumber from 'assets/windowsIcons/word-icons(16x16)/FormatNumberDefault.png';
import FormatPainter from 'assets/windowsIcons/word-icons(16x16)/FormatPainter.png';
import GroupBasicText from 'assets/windowsIcons/word-icons(16x16)/GroupBasicText.png';
import Help from 'assets/windowsIcons/word-icons(16x16)/Help.png';
import HyperlinkInsert from 'assets/windowsIcons/word-icons(16x16)/HyperlinkInsert.png';
import IndentClassic from 'assets/windowsIcons/word-icons(16x16)/IndentClassic.png';
import IndentDecrease from 'assets/windowsIcons/word-icons(16x16)/IndentDecrease.png';
import InkHighlighter from 'assets/windowsIcons/word-icons(16x16)/InkHighlighter.png';
import Italic from 'assets/windowsIcons/word-icons(16x16)/Italic.png';
import LineSpacing from 'assets/windowsIcons/word-icons(16x16)/LineSpacing.png';
import MailMergeStartLabels from 'assets/windowsIcons/word-icons(16x16)/MailMergeStartLabels.png';
import NewOfficeDocument from 'assets/windowsIcons/word-icons(16x16)/NewOfficeDocument.png';
import ParagraphMarks from 'assets/windowsIcons/word-icons(16x16)/ParagraphMarks.png';
import Paste from 'assets/windowsIcons/word-icons(16x16)/Paste.png';
import ReadingMode from 'assets/windowsIcons/word-icons(16x16)/ReadingMode.png';
import Redo from 'assets/windowsIcons/word-icons(16x16)/Redo.png';
import ResearchPane from 'assets/windowsIcons/word-icons(16x16)/ResearchPane.png';
import Save from 'assets/windowsIcons/word-icons(16x16)/FileSave.png';
import Spelling from 'assets/windowsIcons/word-icons(16x16)/Spelling.png';
import StylesPane from 'assets/windowsIcons/word-icons(16x16)/StylesPane.png';
import TableDrawTable from 'assets/windowsIcons/word-icons(16x16)/TableDrawTable.png';
import TableExcelSpreadsheetInsert from 'assets/windowsIcons/word-icons(16x16)/TableExcelSpreadsheetInsert.png';
import TableFind from 'assets/windowsIcons/word-icons(16x16)/TableFind.png';
import TableInsertDialog from 'assets/windowsIcons/word-icons(16x16)/TableInsertDialog.png';
import TextAlignWordJustify from 'assets/windowsIcons/word-icons(16x16)/TextAlignWordJustify.png';
import Underline from 'assets/windowsIcons/word-icons(16x16)/Underline.png';
import Undo from 'assets/windowsIcons/word-icons(16x16)/Undo.png';
import Dropdown from 'assets/windowsIcons/dropdown.png';

function Word({ onClose }) {
  const [pdfUrl] = useState(
    'https://nbviewer.org/github/ekoka99/Resume-site/blob/40aa924c20d0c986ffbd85cb2a790b0fcf3724c3/public/Elio%20Koka%20Autonomy%20and%20AI%20Test%20Engineer%20Resume.pdf',
  );

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
      <section className="word__function_bar word__function_bar_top">
        <FunctionButton icon={NewOfficeDocument} />
        <FunctionButton icon={FileOpen} />
        <FunctionButton icon={Save} />
        <FunctionButton icon={FilePermission} />
        <FunctionButton icon={MailMergeStartLabels} />
        <Divider />
        <FunctionButton icon={FilePrint} />
        <FunctionButton icon={FilePrintPreview} />
        <Divider />
        <FunctionButton icon={Spelling} />
        <FunctionButton icon={ResearchPane} />
        <Divider />
        <FunctionButton icon={Cut} />
        <FunctionButton icon={Copy} />
        <FunctionButton icon={Paste} />
        <FunctionButton icon={FormatPainter} />
        <Divider />
        <FunctionButton icon={Undo} withArrow />
        <FunctionButton icon={Redo} withArrow />
        <Divider />
        <FunctionButton icon={HyperlinkInsert} />
        <FunctionButton icon={TableDrawTable} />
        <FunctionButton icon={TableInsertDialog} />
        <FunctionButton icon={TableExcelSpreadsheetInsert} />
        <FunctionButton icon={TextAlignWordJustify} />
        <FunctionButton icon={DrawingCanvas} />
        <Divider />
        <FunctionButton icon={TableFind} />
        <FunctionButton icon={ParagraphMarks} />
        <ZoomBox>
          <span>100%</span>
          <DropdownButton icon={Dropdown} />
        </ZoomBox>
        <FunctionButton icon={Help} />
        <Divider />
        <ReadModeButton>
          <img src={ReadingMode} alt="Read Mode" />
          <span>Read</span>
        </ReadModeButton>
      </section>
      <section className="word__function_bar word__function_bar_bottom">
        <FunctionButton icon={StylesPane} />
        <TextBox width={90}>
          Normal
          <DropdownButton icon={Dropdown} />
        </TextBox>
        <TextBox width={130}>
          Times New Roman
          <DropdownButton icon={Dropdown} />
        </TextBox>
        <TextBox width={50}>
          12
          <DropdownButton icon={Dropdown} />
        </TextBox>
        <Divider />
        <FunctionButton icon={Bold} />
        <FunctionButton icon={Italic} />
        <FunctionButton icon={Underline} />
        <Divider />
        <FunctionButton icon={AlignLeft} />
        <FunctionButton icon={AlignMiddle} />
        <FunctionButton icon={AlignRight} />
        <FunctionButton icon={TextAlignWordJustify} />
        <FunctionButton icon={LineSpacing} withArrow />
        <Divider />
        <FunctionButton icon={FormatNumber} />
        <FunctionButton icon={Bullets} />
        <FunctionButton icon={IndentClassic} />
        <FunctionButton icon={IndentDecrease} />
        <Divider />
        <FunctionButton icon={BorderOutside} withArrow />
        <FunctionButton icon={InkHighlighter} withArrow />
        <FunctionButton icon={GroupBasicText} withArrow />
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
    height: 28px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 2px 3px;
    border-bottom: 1px solid #2f579d;
    overflow: hidden;
    flex-shrink: 0;
  }

  .word__function_bar_top {
    background: linear-gradient(to bottom, #dcebfe 55%, #81a9e2);
  }

  .word__function_bar_bottom {
    background: linear-gradient(to bottom, #dbeafe 55%, #86afe3);
  }

  .word__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    background-color: #fff;
    position: relative;
  }
`;

const FunctionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => (props.withArrow ? '40px' : '20px')};
  height: 26px;
  background-size: 16px 16px;
  margin: 0 1px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: transparent;
  background-image: ${props => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-position: ${props => (props.withArrow ? '4px center' : 'center')};
  cursor: pointer;
  position: relative;
  flex-shrink: 0;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
  }

  &:hover:active {
    border: 1px solid rgb(185, 185, 185);
    background-color: #edc173;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
    color: rgba(255, 255, 255, 0.7);
    & > * {
      transform: translate(1px, 1px);
    }
  }

  ${props =>
    props.withArrow &&
    `
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid black;
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

const Divider = styled.div`
  width: 1px;
  height: 22px;
  background-color: #8eb2ec;
  margin: 0 3px;
  flex-shrink: 0;
`;

const ZoomBox = styled.div`
  min-width: 75px;
  height: 20px;
  border: 1px solid #3c77dd;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 5px;
  margin: 0 3px;
  font-size: 11px;
  flex-shrink: 0;
  position: relative;
`;

const DropdownButton = styled(FunctionButton)`
  width: 18px;
  height: 19px;
  min-width: unset;
  background-size: 16px 16px;
  margin: 0;
  border: none;
  border-radius: 0px;
  position: absolute;
  right: 0;
  top: 0px;

  &:hover {
    border: none;
    background-color: #e5f0ff;
    box-shadow: none;
  }

  &:hover:active {
    border: none;
    background-color: #cce1ff;
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0.1);
  }
`;

const ReadModeButton = styled(FunctionButton)`
  min-width: auto;
  padding: 0 5px;
  font-size: 11px;
  color: #000;
  background-image: none;

  img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
  }
`;

const TextBox = styled.div`
  min-width: ${props => props.width}px;
  height: 20px;
  border: 1px solid #3c77dd;
  background: #fff;
  display: flex;
  align-items: center;
  padding-left: 5px;
  margin: 0 3px;
  font-size: 11px;
  flex-shrink: 0;
  position: relative;

  ${DropdownButton} {
    right: 0;
    top: 0;
  }
`;

export default Word;
