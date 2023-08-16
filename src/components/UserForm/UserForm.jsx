import { useRef, useState } from "react";
import styles from "./UserForm.module.css";
import { createUser } from "../../API/user";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoader, setisLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState(""); // this state is for success API msg
  const [errorMsg, setErrorMsg] = useState(""); // this state is for error API msg
  const [isAlert, setIsalert] = useState(false);
  const [inputError1, setInputError1] = useState("");
  const [inputError2, setInputError2] = useState("");
  const [inputError3, setInputError3] = useState("");
  const [inputError4, setInputError4] = useState("");

  // using useRef and with the help of this hook we can store object and with the help of this we are focucing in particular input
  // and give reference of dom
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  //input error handler functions...
  const errorHandler1 = (msg) => {
    setInputError1(msg);
    setTimeout(() => {
      setInputError1("");
    }, 3000);
  };

  const errorHandler2 = (msg) => {
    setInputError2(msg);
    setTimeout(() => {
      setInputError2("");
    }, 3000);
  };
  const errorHandler3 = (msg) => {
    setInputError3(msg);
    setTimeout(() => {
      setInputError3("");
    }, 3000);
  };
  const errorHandler4 = (msg) => {
    setInputError4(msg);
    setTimeout(() => {
      setInputError4("");
    }, 3000);
  };

  //creating function for success msg
  const showSuccessMsg = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
    }, 2000);
  };

  //creating function for error msg
  const showErrorMsg = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  // This is the function to reset the detail
  const resetHandler = ()=>{
      setUsername('')
      setConfirmPassword('')     
      setEmail('')
      setPassword('')
  }
  // form validation
  const regExEmail = /^\S+@\S+\.\S+$/;
  const regExUsername = /^[A-Za-z]+$/;
  const isFormValid = () => {
    // console.log(regExUsername.test(username));
    //condition for username input
    if (!username) {
      errorHandler1("*Please enter username");
      usernameRef.current.focus();
      return false;
    } else if (username.length < 3) {
      console.log(username.length < 3);
      errorHandler1("*characters must be greater than 3");
      usernameRef.current.focus();
      return false;
    } else if (!regExUsername.test(username)) {
      //regExusername.test(username) gives the false value if contain any number with characters
      errorHandler1("*Please enter characters only");
      usernameRef.current.focus();
      return false;
    }
    //comdition for email input
    else if (!email) {
      errorHandler2("*Please enter email");
      emailRef.current.focus();
      return false;
    } else if (!regExEmail.test(email)) {
      errorHandler2("*Please enter a valid email");
      emailRef.current.focus();
      return false;
    }
    //condition for password input
    else if (!password) {
      errorHandler3("*please enter password");
      passwordRef.current.focus();
      return false;
    } else if (password.length < 5) {
      errorHandler3("*must container minimum 5 character");
      passwordRef.current.focus();
      return false;
    }
    //condition for confirm password input
    else if (!confirmPassword) {
      errorHandler4("please retype your password");
      confirmPasswordRef.current.focus();
      return false;
    } else if (password !== confirmPassword) {
      // errorHandler4('*Password is not matching')
      alert("Please check password is not matching");
      return false;
    }

    return true;
  };

  //giving border conditon for success msg
  const onSuccessUsername = () => {
    if (!username || username.length < 3 || !regExUsername.test(username)) {
      usernameRef.current.style.border = "2px solid red";
    } else {
      usernameRef.current.style.border = "2px solid green";
    }
  };
  const onSuccessEmail = () => {
    if (!email || !regExEmail.test(email)) {
      emailRef.current.style.border = "2px solid red";
    } else {
      emailRef.current.style.border = "2px solid green";
    }
  };
  const onSuccessPassword = () => {
    if (!password || password.length < 5) {
      passwordRef.current.style.border = "2px solid red";
    } else {
      passwordRef.current.style.border = "2px solid green";
    }
  };
  const onSuccessConfirmPassword = () => {
    if (!confirmPassword || password !== confirmPassword) {
      confirmPasswordRef.current.style.border = "2px solid red";
    } else {
      confirmPasswordRef.current.style.border = "3px solid green";
    }
  };

  // it toggle to the login page if all the condition will statisfy
  const toggleHandler = () => {
    //function for border condition...
    onSuccessUsername();
    onSuccessEmail();
    onSuccessPassword();
    onSuccessConfirmPassword();

    if (!isFormValid()) {
      return;
    }

    let users = {
      username,
      email,
      password,
      confirmPassword,
    };
    console.log(users);

    //API calling
    setisLoader(true);
    setIsalert(true);
    createUser(users)
      .then((data) => {
        showSuccessMsg(`User has been created successfully with id ${data.id}`);
        setTimeout(() => {
          setIsalert(false);
        }, 2000);
        setisLoader(false);
        // resetHandler()
      })
      .catch(() => {
        setisLoader(false);
        showErrorMsg("*Please try again later!!");
      });
      resetHandler()
  };

  // count number of render...
  const reRenderCount = useRef(0);

  return (
    <>
      {isAlert && (
        <Alert variant="success">
          <i>You API has been created successfully</i>
        </Alert>
      )}
        <>
          <div className={styles.container}>
            <div className={styles.imageSection}></div>
            <div className={styles.inputSection}>
              <div className={styles.userDetails}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  value={username}
                  ref={usernameRef}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className={styles.inputError}>{inputError1}</span>
              </div>
              <div className={styles.userDetails}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  ref={emailRef}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={styles.inputError}>{inputError2}</span>
              </div>
              <div className={styles.userDetails}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  ref={passwordRef}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className={styles.inputError}>{inputError3}</span>
              </div>
              <div className={styles.userDetails}>
                <label htmlFor="confirm password">confirm Password</label>
                <input
                  type="password"
                  id="Cpassword"
                  name="confirm password"
                  placeholder="confirm password"
                  value={confirmPassword}
                  ref={confirmPasswordRef}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span className={styles.inputError}>{inputError4}</span>
              </div>
              <div className={styles.userDetails}>
                <button onClick={toggleHandler}>Create User</button>
                <div className={styles.isLoader}>
                  {isLoader && <Spinner animation="border" variant="primary" />}
                </div>
                <div className={styles.errorMsg}>
                  <span>{errorMsg}</span>
                </div>
                <div className={styles.successMsg}>
                  <span>{successMsg}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.countRender}>
            <h4>Count Re_render : {reRenderCount.current++}</h4>
          </div>
        </>
    </>
  );
};
export default UserForm;
