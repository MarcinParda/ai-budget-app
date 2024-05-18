import styles from './ui-shared-dropdown-menu.module.css';

/* eslint-disable-next-line */
export interface UiSharedDropdownMenuProps {}

export function UiSharedDropdownMenu(props: UiSharedDropdownMenuProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedDropdownMenu!</h1>
    </div>
  );
}

export default UiSharedDropdownMenu;
