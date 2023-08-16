import UserForm from "../components/UserForm/UserForm";
import PrivatePageHoc from "../hoc/privatePageHoc";

// eslint-disable-next-line react-refresh/only-export-components
const AddUser = () => {
  return (
    <>
      <h2 style={{ fontWeight: 800, textAlign: "center",fontStyle:'italic'}}>
        Add <span style={{ color: "red"}}>user</span>
      </h2>
      <UserForm />
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default PrivatePageHoc(AddUser);
