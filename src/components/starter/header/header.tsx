import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

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
          <a href="#" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
