import { Component } from "react";

import styles from "./user.module.scss";

export class User extends Component {
  render() {
    return <li className={styles["user-container"]}>{this.props.name}</li>;
  }
}
