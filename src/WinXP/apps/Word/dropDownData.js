export const File = [
  {
    type: 'item',
    text: 'New...',
  },
  {
    type: 'item',
    text: 'Open...',
    hotkey: 'Ctrl+O',
  },
  {
    type: 'item',
    text: 'Close',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Save',
    hotkey: 'Ctrl+S',
  },
  {
    type: 'item',
    text: 'Save As...',
  },
  {
    type: 'item',
    text: 'Save As Web Page...',
  },
  {
    type: 'item',
    text: 'File Search...',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Permissions',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Unrestricted Access',
      },
      {
        type: 'item',
        text: 'Do Not Distribute...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Restrict Permission As...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Versions...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Web Page Preview',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Page Setup...',
  },
  {
    type: 'item',
    text: 'Print Preview',
  },
  {
    type: 'item',
    text: 'Print',
    hotkey: 'Ctrl+P',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Send To',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Mail Recipient',
      },
      {
        type: 'item',
        text: 'Mail Recipient (for Review)...',
      },
      {
        type: 'item',
        text: 'Mail Recipient (as Attachment)...',
      },
      {
        type: 'item',
        text: 'Routing Recipient...',
      },
      {
        type: 'item',
        text: 'Exchange Folder...',
      },
      {
        type: 'item',
        text: 'Online Meeting Participant',
        disable: true,
      },
      {
        type: 'item',
        text: 'Recipient using a Fax Modem...',
      },
      {
        type: 'item',
        text: 'Recipient using Internet Fax Service',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Microsoft Office PowerPoint',
      },
    ],
  },
  {
    type: 'item',
    text: 'Properties',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Exit',
  },
];

export const Edit = [
  {
    type: 'item',
    text: "Can't Undo",
    hotkey: 'Ctrl+Z',
    disable: true,
  },
  {
    type: 'item',
    text: "Can't Repeat",
    hotkey: 'Ctrl+Y',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Cut',
    hotkey: 'Ctrl+X',
  },
  {
    type: 'item',
    text: 'Copy',
    hotkey: 'Ctrl+C',
  },
  {
    type: 'item',
    text: 'Office Clipboard...',
  },
  {
    type: 'item',
    text: 'Paste',
    hotkey: 'Ctrl+V',
  },
  {
    type: 'item',
    text: 'Paste Special...',
  },
  {
    type: 'item',
    text: 'Paste as Hyperlink',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Clear',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Formats',
      },
      {
        type: 'item',
        text: 'Contents',
      },
    ],
  },
  {
    type: 'item',
    text: 'Select All',
    hotkey: 'Ctrl+A',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Find...',
    hotkey: 'Ctrl+F',
  },
  {
    type: 'item',
    text: 'Replace...',
    hotkey: 'Ctrl+H',
  },
  {
    type: 'item',
    text: 'Go To...',
    hotkey: 'Ctrl+G',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Links...',
  },
  {
    type: 'item',
    text: 'Object',
  },
];

export const View = [
  {
    type: 'item',
    text: 'Normal',
  },
  {
    type: 'item',
    text: 'Web Layout',
  },
  {
    type: 'item',
    text: 'Print Layout',
  },
  {
    type: 'item',
    text: 'Reading Layout',
  },
  {
    type: 'item',
    text: 'Outline',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Task Pane',
    hotkey: 'Ctrl+F1',
    symbol: 'check',
  },
  {
    type: 'menu',
    text: 'Toolbars',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Standard',
        symbol: 'check',
      },
      {
        type: 'item',
        text: 'Formatting',
        symbol: 'check',
      },
      {
        type: 'item',
        text: 'AutoText',
      },
      {
        type: 'item',
        text: 'Control Toolbox',
      },
      {
        type: 'item',
        text: 'Database',
      },
      {
        type: 'item',
        text: 'Drawing',
      },
      {
        type: 'item',
        text: 'E-mail',
      },
      {
        type: 'item',
        text: 'Forms',
      },
      {
        type: 'item',
        text: 'Frames',
      },
      {
        type: 'item',
        text: 'Mail Merge',
      },
      {
        type: 'item',
        text: 'Outlining',
      },
      {
        type: 'item',
        text: 'Picture',
      },
      {
        type: 'item',
        text: 'Reviewing',
      },
      {
        type: 'item',
        text: 'Tables and Borders',
      },
      {
        type: 'item',
        text: 'Task Pane',
        symbol: 'check',
      },
      {
        type: 'item',
        text: 'Visual Basic',
      },
      {
        type: 'item',
        text: 'Web',
      },
      {
        type: 'item',
        text: 'Web Tools',
      },
      {
        type: 'item',
        text: 'Word Count',
      },
      {
        type: 'item',
        text: 'WordArt',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Customize...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Ruler',
    symbol: 'check',
  },
  {
    type: 'item',
    text: 'Document Map',
  },
  {
    type: 'item',
    text: 'Thumbnails',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Header and Footer',
  },
  {
    type: 'item',
    text: 'Footnotes',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Markup',
    symbol: 'check',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Full Screen',
  },
  {
    type: 'item',
    text: 'Zoom...',
  },
];

export const Insert = [
  {
    type: 'item',
    text: 'Break...',
  },
  {
    type: 'item',
    text: 'Page Numbers...',
  },
  {
    type: 'item',
    text: 'Date and Time...',
  },
  {
    type: 'menu',
    text: 'AutoText',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'AutoText...',
      },
      {
        type: 'item',
        text: 'New...',
        hotkey: 'Alt+F3',
        disabled: true,
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Attention Line...',
      },
      {
        type: 'item',
        text: 'Closing...',
      },
      {
        type: 'item',
        text: 'Header/Footer...',
      },
      {
        type: 'item',
        text: 'Mailing Instructions...',
      },
      {
        type: 'item',
        text: 'Reference Line...',
      },
      {
        type: 'item',
        text: 'Salutation...',
      },
      {
        type: 'item',
        text: 'Subject Line...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Field...',
  },
  {
    type: 'item',
    text: 'Symbol...',
  },
  {
    type: 'item',
    text: 'Comment',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Reference',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Footnote...',
      },
      {
        type: 'item',
        text: 'Caption...',
      },
      {
        type: 'item',
        text: 'Cross-reference...',
      },
      {
        type: 'item',
        text: 'Index and Tables...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Web Component...',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Picture',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Clip Art...',
      },
      {
        type: 'item',
        text: 'From File...',
      },
      {
        type: 'item',
        text: 'From Scanner or Camera...',
      },
      {
        type: 'item',
        text: 'New Drawing',
      },
      {
        type: 'item',
        text: 'AutoShapes',
      },
      {
        type: 'item',
        text: 'WordArt...',
      },
      {
        type: 'item',
        text: 'Organization Chart',
      },
      {
        type: 'item',
        text: 'Chart',
      },
    ],
  },
  {
    type: 'item',
    text: 'Diagram...',
  },
  {
    type: 'item',
    text: 'Text Box',
  },
  {
    type: 'item',
    text: 'File...',
  },
  {
    type: 'item',
    text: 'Object...',
  },
  {
    type: 'item',
    text: 'Bookmark...',
  },
  {
    type: 'item',
    text: 'Hyperlink...',
    hotkey: 'Ctrl+K',
  },
];

export const Format = [
  {
    type: 'item',
    text: 'Font...',
  },
  {
    type: 'item',
    text: 'Paragraph...',
  },
  {
    type: 'item',
    text: 'Bullets and Numbering...',
  },
  {
    type: 'item',
    text: 'Borders and Shading...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Columns...',
  },
  {
    type: 'item',
    text: 'Tabs...',
  },
  {
    type: 'item',
    text: 'Drop Cap...',
    disable: true,
  },
  {
    type: 'item',
    text: 'Text Direction...',
    disable: true,
  },
  {
    type: 'item',
    text: 'Change Case...',
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Background',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'No Fill',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'More Colors...',
      },
      {
        type: 'item',
        text: 'Fill Effects...',
      },
      {
        type: 'item',
        text: 'Printed Watermark...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Theme...',
  },
  {
    type: 'menu',
    text: 'Frames',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Table of Contents in Frame',
      },
      {
        type: 'item',
        text: 'New Frames Page',
      },
    ],
  },
  {
    type: 'item',
    text: 'AutoFormat...',
  },
  {
    type: 'item',
    text: 'Styles and Formatting...',
  },
  {
    type: 'item',
    text: 'Reveal Formatting...',
    hotkey: 'Shift+F1',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Object...',
    disable: true,
  },
];

export const Tools = [
  {
    type: 'item',
    text: 'Spelling and Grammar...',
    hotkey: 'F7',
  },
  {
    type: 'item',
    text: 'Research...',
    hotkey: 'Alt+Click',
  },
  {
    type: 'menu',
    text: 'Language',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Set Language...',
      },
      {
        type: 'item',
        text: 'Translate...',
      },
      {
        type: 'item',
        text: 'Thesaurus...',
        hotkey: 'Shift+F7',
      },
      {
        type: 'item',
        text: 'Hyphenation...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Word Count...',
  },
  {
    type: 'item',
    text: 'AutoSummarize...',
  },
  {
    type: 'item',
    text: 'Speech',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Shared Workspace...',
  },
  {
    type: 'item',
    text: 'Track Changes',
    hotkey: 'Ctrl+Shift+E',
  },
  {
    type: 'item',
    text: 'Compare and Merge Documents...',
  },
  {
    type: 'item',
    text: 'Protect Document...',
  },
  {
    type: 'menu',
    text: 'Online Collaboration',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Meet Now',
      },
      {
        type: 'item',
        text: 'Schedule Meeting...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Web Discussions...',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Letters and Mailings',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Mail Merge...',
      },
      {
        type: 'item',
        text: 'Show Mail Merge Toolbar',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Envelopes and Labels...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Letter Wizard...',
      },
    ],
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Macro',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Macros...',
        hotkey: 'Alt+F8',
      },
      {
        type: 'item',
        text: 'Record New Macros...',
      },
      {
        type: 'item',
        text: 'Security...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Visual Basic Editor',
        hotkey: 'Alt+F11',
      },
      {
        type: 'item',
        text: 'Microsoft Script Editor',
        hotkey: 'Alt+Shift+F11',
      },
    ],
  },
  {
    type: 'item',
    text: 'Templates and Add-Ins...',
  },
  {
    type: 'item',
    text: 'AutoCorrect Options...',
  },
  {
    type: 'item',
    text: 'Customize...',
  },
  {
    type: 'item',
    text: 'Options...',
  },
];

export const Table = [
  {
    type: 'item',
    text: 'Draw Table',
  },
  {
    type: 'menu',
    text: 'Insert',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Table...',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Columns to the Left',
      },
      {
        type: 'item',
        text: 'Columns to the Right',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Rows Above',
      },
      {
        type: 'item',
        text: 'Rows Below',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Cells...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Delete',
  },
  {
    type: 'item',
    text: 'Select',
  },
  {
    type: 'item',
    text: 'Merge Cells',
    disable: true,
  },
  {
    type: 'item',
    text: 'Split Cells...',
    disable: true,
  },
  {
    type: 'item',
    text: 'Split Table',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Table AutoFormat...',
  },
  {
    type: 'menu',
    text: 'AutoFit',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'AutoFit to Contents',
      },
      {
        type: 'item',
        text: 'AutoFit to Window',
      },
      {
        type: 'item',
        text: 'Fixed Column Width',
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        text: 'Distribute Rows Evenly',
      },
      {
        type: 'item',
        text: 'Distribute Columns Evenly',
      },
    ],
  },
  {
    type: 'item',
    text: 'Heading Rows Repeat',
    disable: true,
  },
  {
    type: 'separator',
  },
  {
    type: 'menu',
    text: 'Convert',
    position: {
      left: 'calc(100% - 4px)',
      top: '-3px',
    },
    items: [
      {
        type: 'item',
        text: 'Text to Table...',
      },
      {
        type: 'item',
        text: 'Table to Text...',
      },
    ],
  },
  {
    type: 'item',
    text: 'Sort...',
  },
  {
    type: 'item',
    text: 'Formula...',
  },
  {
    type: 'item',
    text: 'Hide Gridlines',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Table Properties...',
    disable: true,
  },
];

export const Window = [
  {
    type: 'item',
    text: 'New Window',
  },
  {
    type: 'item',
    text: 'Arrange All',
  },
  {
    type: 'item',
    text: 'Compare Side by Side with...',
    disable: true,
  },
  {
    type: 'item',
    text: 'Split',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Resume',
    symbol: 'check',
  },
];

export const Help = [
  {
    type: 'item',
    text: 'Microsoft Office Word Help',
    hotkey: 'F1',
  },
  {
    type: 'item',
    text: 'Show the Office Assistant',
  },
  {
    type: 'item',
    text: 'Microsoft Office Online',
  },
  {
    type: 'item',
    text: 'Contact Us',
  },
  {
    type: 'item',
    text: 'WordPerfect Help...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Check for Updates',
  },
  {
    type: 'item',
    text: 'Detect and Repair...',
  },
  {
    type: 'item',
    text: 'Activate Product...',
  },
  {
    type: 'item',
    text: 'Customer Feedback Options...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'About Microsoft Office Word',
  },
];

const WordMenuData = {
  File,
  Edit,
  View,
  Insert,
  Format,
  Tools,
  Table,
  Window,
  Help,
};

export default WordMenuData;
