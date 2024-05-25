import styles from './ui-shared-month-picker.module.css';

/* eslint-disable-next-line */
export interface UiSharedMonthPickerProps {}

export function UiSharedMonthPicker(props: UiSharedMonthPickerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedMonthPicker!</h1>
    </div>
  );
}

export default UiSharedMonthPicker;
