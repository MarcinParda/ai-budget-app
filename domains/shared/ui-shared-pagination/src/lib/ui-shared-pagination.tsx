import styles from './ui-shared-pagination.module.css';

/* eslint-disable-next-line */
export interface UiSharedPaginationProps {}

export function UiSharedPagination(props: UiSharedPaginationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedPagination!</h1>
    </div>
  );
}

export default UiSharedPagination;
