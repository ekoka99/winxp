import InternetExplorer from './InternetExplorer';
import ErrorBox from './ErrorBox';
import Notepad from './Notepad';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import wordPaper from 'assets/windowsIcons/word-paper.png';
import Word from './Word';
import ie from 'assets/windowsIcons/ie.png';
import wordIcon from 'assets/windowsIcons/word.png';
import error from 'assets/windowsIcons/897(16x16).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';

// Function to detect mobile devices
const isMobileDevice = () => {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
};

// Function to get appropriate dimensions based on device type
const getDimensions = (desktopWidth, desktopHeight) => {
  if (isMobileDevice()) {
    return {
      width: window.innerWidth * 0.9,
      height: window.innerHeight * 0.7,
    };
  }
  return {
    width: desktopWidth,
    height: desktopHeight,
  };
};

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};

const genId = gen();
const genIndex = gen();

export const defaultAppState = [
  {
    component: InternetExplorer,
    header: {
      title: "Elio Koka's Personal Site - Internet Explorer",
      icon: iePaper,
    },
    defaultSize: getDimensions(
      window.innerWidth * 0.7,
      window.innerHeight * 0.85,
    ),
    defaultOffset: {
      x: 110,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: isMobileDevice(),
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 1,
    icon: wordIcon,
    title: 'Resume.docx',
    component: Word,
    isFocus: false,
  },
  {
    id: 2,
    icon: notepadLarge,
    title: 'Projects.txt',
    component: Notepad,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: "Elio Koka's Personal Site - Internet Explorer",
    },
    component: InternetExplorer,
    defaultSize: getDimensions(700, 500),
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: isMobileDevice(),
    multiInstance: true,
  },
  Word: {
    header: {
      icon: wordPaper,
      title: 'Resume.docx - Microsoft Word',
    },
    component: Word,
    defaultSize: getDimensions(
      window.innerWidth * 0.7,
      window.innerHeight * 0.9,
    ),
    defaultOffset: {
      x: 150,
      y: 25,
    },
    resizable: true,
    minimized: false,
    maximized: isMobileDevice(),
    multiInstance: true,
    noFooterWindow: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Projects.txt - Notepad',
    },
    component: Notepad,
    defaultSize: getDimensions(660, 500),
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: isMobileDevice(),
    multiInstance: true,
  },
};

export { InternetExplorer, ErrorBox, Word, Notepad };
