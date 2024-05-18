import styles from './ui-shared-input.module.css';

/* eslint-disable-next-line */
export interface UiSharedInputProps {}

export function UiSharedInput(props: UiSharedInputProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedInput!</h1>
    </div>
  );
}

export default UiSharedInput;
