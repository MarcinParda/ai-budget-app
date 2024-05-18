import styles from './ui-shared-progress.module.css';

/* eslint-disable-next-line */
export interface UiSharedProgressProps {}

export function UiSharedProgress(props: UiSharedProgressProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedProgress!</h1>
    </div>
  );
}

export default UiSharedProgress;
