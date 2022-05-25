import { NextPage } from "next";
import { redirect } from "next/dist/server/api-utils";
import styles from "../styles/Users.module.css";

const Users: NextPage = () => {
  return (
    <div className={styles.bg}>
       <div className={styles.card}>
            
          <div className={styles.personal}>

            <div className={styles.img}></div>

            <div className={styles.info}>

              <div className={styles.name}>
                <p>Ronald Richards</p>
                <p>ronald.richards@example.com</p>
              </div>

              <div className={styles.genderAge}>
                <p>male</p>
                <p>34</p>
              </div>
            </div>

          </div>

          <div className={styles.address}>
            
            <div className={styles.text}>
              <p>Crown Point</p>
              <p>Street</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.text}>
              <p>Austin</p>
              <p>City</p>
            </div>

            <div className={styles.line}></div>
            
            <div className={styles.text}>
              <p>73301</p>
              <p>Zip code</p>
            </div>

          </div>

          <ul className={styles.images}>
            <li>Image 1</li>
            <li></li>
            <li>Image 2</li>
            <li></li>
            <li>Image 3</li>
          </ul>

      </div>
    </div>
  )
};

export default Users;
