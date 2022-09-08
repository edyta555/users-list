import styles from "./user.module.scss";

export const User = ({ name }) => {
  return <li className={styles["user-container"]}>{name}</li>;
};
