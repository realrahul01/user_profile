/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./UserProfile.module.css";
import { AuthContext } from "../../contexts/AuthContext";
const UserProfile = ({ name, email, image, userIndex, delteUserHandler }) => {

  const{isUserLogin}= useContext(AuthContext) 
  console.log(isUserLogin)

  return (
    <div className={styles.userContainer}>

          <>
                <h3>{name}</h3>
                <p>{email}</p>
              <div>
                <img src={image} alt="error" />
              </div>
              <div>
              {!isUserLogin && (
                null
              )}
              {isUserLogin &&(
                <button className={styles.deleteBtn} onClick={()=>delteUserHandler(userIndex)}>Delete</button>
              )}
              </div>

            </>
    </div>
  );
};
export default UserProfile;
