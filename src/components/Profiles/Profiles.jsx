/* eslint-disable react/prop-types */
import styles from "./Profiles.module.css";
import UserProfile from "../UserProfile/UserProfile";
import { useEffect, useState } from "react";
import { deleteUser, userData } from "../../API/user";
import Loader from "../Loader/Loader";
import { Navigate, useNavigate } from "react-router-dom";
import route from './../../routes/route.json'

const Profiles = ({page=1}) => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  // const [page, setPage] = useState(1);
  const [isloader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [isDelete,setIsDelete] = useState(false)

  useEffect(() => {
    setIsError(false);
    setIsLoader(true);
    userData(page)
      .then((profile) => {
        setUsers(profile.data);
        // console.log(profile.data)
        setIsLoader(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoader(false);
      });
  }, [page]);
  //   console.log(users)

  const delteUserHandler = (userIndex) => {
    // setUsers([...users,isDelete])

    let reConfirm = confirm(
      "Are your sure you want to permanately delete this profile?"
    );
    if(!reConfirm){
      return
    }
    // console.log("Need to call the API", userIndex)
    setIsLoader(true);


    deleteUser(users[userIndex].id)
      .then((isUserDeleted) => {
        // console.log('API completed',isUserDeleted)
        if (isUserDeleted) {
          let deleteProfileFromUi = [...users];
          deleteProfileFromUi.splice(userIndex, 1);
          setIsLoader(false);
          setUsers(deleteProfileFromUi)
        }
      })
      .catch(() => {
        setIsError(true);
        setIsLoader(false)
      });
  };

  // console.log(users);

  const itemList = users.map((user, index) => (
    <UserProfile
    key={index}
      name={user.first_name}
      email={user.email}
      image={user.avatar}
      userIndex={index}
      delteUserHandler={delteUserHandler}
      isLoader={user.isLoader}
    />
  ));

  const peginationHandler = () => {
    navigate(page=== '1' ? `/${route.PROFILES}/2` : `/${route.PROFILES}/1`)
  };

  return (
    <>
      <p style={{ fontWeight: 800, fontStyle: "italic"}}>
        page : {page}
      </p>

      {isloader && <Loader />}
      {!isloader && (
        <>
          {isError && (
            <p style={{ fontWeight: 800, color: "red" }}>
              Something goes wrong please try again later !!
            </p>
          )}
          {!isError && (
            <div className={styles.profileContainer}>{itemList}</div>
          )}
          <button className={styles.profileBtn} onClick={peginationHandler}>
            Page : {page}
          </button>
        </>
      )}
      {/* {!(page === '1' || page === '2') && <Navigate to="/error" />} */}
    </>
  );
};
export default Profiles;
