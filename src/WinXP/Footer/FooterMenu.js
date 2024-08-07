import React, { useState } from 'react';
import styled from 'styled-components';

import user from 'assets/windowsIcons/user.png';
import lock from 'assets/windowsIcons/546(32x32).png';
import shut from 'assets/windowsIcons/310(32x32).png';
import outlook from 'assets/windowsIcons/887(32x32).png';
import phone from 'assets/windowsIcons/phone(32x32).png';

function FooterMenu({ onClick }) {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage('Copied to clipboard');
      setTimeout(() => setCopyMessage(''), 2000);
    });
  };

  return (
    <StyledFooterMenu>
      <header>
        <img className="header__img" src={user} alt="avatar" />
        <span className="header__text">Elio Koka</span>
      </header>
      <section className="menu">
        <hr className="orange-hr" />
        <div className="menu__left">
          <div
            className="menu__item"
            onClick={() => copyToClipboard('kokaelio@msu.edu')}
          >
            <img className="menu__item__img" src={outlook} alt="Email" />
            <div className="menu__item__texts">
              <div className="menu__item__text">My E-Mail</div>
              <div className="menu__item__subtext">kokaelio@msu.edu</div>
            </div>
          </div>
        </div>
        <div className="menu__right">
          <div
            className="menu__item"
            onClick={() => copyToClipboard('(248) 880-5549')}
          >
            <img className="menu__item__img" src={phone} alt="Phone" />
            <div className="menu__item__texts">
              <div className="menu__item__text">My Phone</div>
              <div className="menu__item__subtext">(248) 880-5549</div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer__item" onClick={() => onClick('Log Off')}>
          <img className="footer__item__img" src={lock} alt="" />
          <span>Log Off</span>
        </div>
        <div
          className="footer__item"
          onClick={() => onClick('Turn Off Computer')}
        >
          <img className="footer__item__img" src={shut} alt="" />
          <span>Turn Off Computer</span>
        </div>
      </footer>
      {copyMessage && <CopyMessage>{copyMessage}</CopyMessage>}
    </StyledFooterMenu>
  );
}

const StyledFooterMenu = styled.div`
  font-size: 11px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4282d6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  header {
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    color: #fff;
    height: 54px;
    padding: 6px 5px 5px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(
      to bottom,
      #1868ce 0%,
      #0e60cb 12%,
      #0e60cb 20%,
      #1164cf 32%,
      #1667cf 33%,
      #1b6cd3 47%,
      #1e70d9 54%,
      #2476dc 60%,
      #297ae0 65%,
      #3482e3 77%,
      #3786e5 79%,
      #428ee9 90%,
      #4791eb 100%
    );
    overflow: hidden;
  }

  .header__img {
    width: 42px;
    height: 42px;
    margin-right: 5px;
    border-radius: 3px;
    border: 2px solid rgb(222, 222, 222, 0.8);
  }

  .header__text {
    font-size: 14px;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
  }

  .menu {
    display: flex;
    margin: 0 2px;
    position: relative;
    border-top: 1px solid #385de7;
    box-shadow: 0 1px #385de7;
  }

  .orange-hr {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      #da884a 50%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 0;
  }

  .menu__left {
    background-color: #fff;
    padding: 6px 5px 0;
    width: 190px;
    display: flex;
    flex-direction: column;
  }

  .menu__right {
    background-color: #cbe3ff;
    border-left: solid #3a3aff5e 1px;
    padding: 6px 5px 0;
    width: 190px;
    color: #00136b;
  }

  .menu__item {
    padding: 1px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    height: 34px;
    cursor: pointer;
  }

  .menu__item:hover {
    color: white;
    background-color: #2f71cd;
  }

  .menu__item:hover .menu__item__subtext {
    color: white;
  }

  .menu__item__img {
    width: 30px;
    height: 30px;
    margin-right: 3px;
  }

  .menu__item__texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .menu__item__text {
    font-weight: bold;
  }

  .menu__item__subtext {
    color: rgba(0, 0, 0, 0.4);
    line-height: 12px;
  }

  footer {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    height: 36px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      #4282d6 0%,
      #3b85e0 3%,
      #418ae3 5%,
      #418ae3 17%,
      #3c87e2 21%,
      #3786e4 26%,
      #3482e3 29%,
      #2e7ee1 39%,
      #2374df 49%,
      #2072db 57%,
      #196edb 62%,
      #176bd8 72%,
      #1468d5 75%,
      #1165d2 83%,
      #0f61cb 88%
    );
  }

  .footer__item {
    padding: 3px;
    display: flex;
    margin-right: 10px;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(60, 80, 210, 0.5);
    }

    &:hover:active > * {
      transform: translate(1px, 1px);
    }
  }

  .footer__item__img {
    border-radius: 3px;
    margin-right: 2px;
    width: 22px;
    height: 22px;
  }
`;

const CopyMessage = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  animation: fadeOut 2s forwards;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default FooterMenu;
