import styles from './ui-shared-button.module.css';

/* eslint-disable-next-line */
export interface UiSharedButtonProps {}

export function UiSharedButton(props: UiSharedButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedButton!</h1>
    </div>
  );
}

export default UiSharedButton;
