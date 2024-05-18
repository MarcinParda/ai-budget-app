import styles from './ui-shared-separator.module.css';

/* eslint-disable-next-line */
export interface UiSharedSeparatorProps {}

export function UiSharedSeparator(props: UiSharedSeparatorProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedSeparator!</h1>
    </div>
  );
}

export default UiSharedSeparator;
