import styles from './ui-shared-table.module.css';

/* eslint-disable-next-line */
export interface UiSharedTableProps {}

export function UiSharedTable(props: UiSharedTableProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedTable!</h1>
    </div>
  );
}

export default UiSharedTable;
