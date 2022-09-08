import { useState } from "react";
import { User } from "../user/User";

import { defaultUsers } from "./payload";

import styles from "./users.module.scss";

export const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((prevState) => !prevState);
  };

  const usersList = (
    <ul>
      {defaultUsers.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={styles["users-container"]}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} users
      </button>
      {showUsers && usersList}
    </div>
  );
};
