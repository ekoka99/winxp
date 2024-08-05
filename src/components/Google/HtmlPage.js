// HtmlPage.js
import React from 'react';

const HtmlPage = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '16px',
  };

  const section1Style = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    backgroundImage:
      'url(https://cdn.xingosoftware.com/elektor/images/fetch/dpr_2,w_636,h_389,c_fit/https%3A%2F%2Fwww.elektormagazine.com%2Fassets%2Fupload%2Fimages%2F42%2F20221103142031_wheel-me-Genius.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textShadow: '2px 2px 4px #000',
  };

  const section2Style = {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    backgroundColor: '#333',
    color: 'white',
  };

  const section3Style = {
    height: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    backgroundColor: '#f0f0f0',
    color: 'black',
  };

  return (
    <div>
      <nav style={navStyle}>
        <a
          href="#section2"
          style={linkStyle}
          onClick={e => handleClick(e, 'section2')}
        >
          Section 2
        </a>
        <a
          href="#section3"
          style={linkStyle}
          onClick={e => handleClick(e, 'section3')}
        >
          Section 3
        </a>
      </nav>

      <section id="section1" style={section1Style}>
        <div>
          <h2>MATERIAL HANDLING AUTOMATION</h2>
          <p>
            The world’s first autonomous wheel, transforms any object into a
            mobile robot.
          </p>
        </div>
      </section>

      <section id="section2" style={section2Style}>
        <div>
          <h2>Section 2</h2>
          <p>This is the second section.</p>
        </div>
      </section>

      <section id="section3" style={section3Style}>
        <div>
          <h2>Section 3</h2>
          <p>This is the third section.</p>
        </div>
      </section>
    </div>
  );
};

export default HtmlPage;
