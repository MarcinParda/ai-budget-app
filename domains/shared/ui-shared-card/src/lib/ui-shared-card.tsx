import styles from './ui-shared-card.module.css';

/* eslint-disable-next-line */
export interface UiSharedCardProps {}

export function UiSharedCard(props: UiSharedCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSharedCard!</h1>
    </div>
  );
}

export default UiSharedCard;
