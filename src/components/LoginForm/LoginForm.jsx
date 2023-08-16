/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import styles from "./LoginForm.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../contexts/AuthContext";
import route from './../../routes/route.json'

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const navigate = useNavigate();

  const { isUserLogin, loginHandler } = useContext(AuthContext);
  console.log(isUserLogin);

  // userRef
  const emailRef = useRef();
  const passwordRef = useRef();

  //error function
  const emailError = (msg) => {
    setEmailErrorMsg(msg);
    setTimeout(() => {
      setEmailErrorMsg("");
    }, 3000);
  };
  const passwordError = (msg) => {
    setPasswordErrorMsg(msg);
    setTimeout(() => {
      setPasswordErrorMsg("");
    }, 3000);
  };

  const clickHandler = () => {
    if (!loginEmail) {
      emailError("*Please enter email");
      emailRef.current.focus();
      return;
    } else if (!loginPassword) {
      passwordError("*Please enter password");
      passwordRef.current.focus();
      return;
    }

    let loginUser = {
      loginEmail,
      loginPassword,
    };
    console.log(loginUser);

    setIsLoader(true);

    setTimeout(() => {
      if (loginEmail === loginPassword) {
        alert("Login Successful");
        navigate("/profiles");
        loginHandler();
      } else {
        alert("user not found... email password must be same");
      }
      setIsLoader(false);
    }, 1500);

    setLoginEmail();
    setLoginPassword();
  };

  return (
    <>
    {!isUserLogin && (
      <> 
        {isLoader && <Loader />}
        {!isLoader && (
          <div className={styles.loginContainer}>
            <div>
              <h3>Login Here</h3>
            </div>
            <div className={styles.loginDetails}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email"
                id="email"
                value={loginEmail}
                ref={emailRef}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <div className={styles.showErrorMsg}>
                <span>{emailErrorMsg}</span>
              </div>
            </div>
            <div className={styles.loginDetails}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                value={loginPassword}
                ref={passwordRef}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <div className={styles.showErrorMsg}>
                <span>{passwordErrorMsg}</span>
              </div>
            </div>
            <div className={styles.loginDetails}>
              <button onClick={clickHandler}>Login</button>
            </div>
          </div>
        )} 
      </>       
      )}
      {isUserLogin &&(
        <Navigate to={route.HOME}/>
      )}
        </>
  );
};
export default LoginForm;
