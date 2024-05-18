import styles from './ui-shared-tabs.module.css';

/* eslint-disable-next-line */
export interface UiSharedTabsProps {}

export function UiSharedTabs(props: UiSharedTabsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedTabs!</h1>
    </div>
  );
}

export default UiSharedTabs;
