import styles from './ui-shared-sheet.module.css';

/* eslint-disable-next-line */
export interface UiSharedSheetProps {}

export function UiSharedSheet(props: UiSharedSheetProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedSheet!</h1>
    </div>
  );
}

export default UiSharedSheet;
