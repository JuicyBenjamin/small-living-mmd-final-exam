import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

//* Index page with the newest articles and CTAS with videos and contents we make + promoting SoMe accounts
//* Articles page
//! Shop page
//* About page
//* Contact page - sending your ideas and connecting with benjamin (form?) - community stuff
//* Cookies and policies page




export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <a href="/" title="small-living-logo">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/articles">
            Articles
          </a>
        </li>
        <li>
          <a href="/about">
            About
          </a>
        </li>
        <li>
          <a href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
});
