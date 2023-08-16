import { useParams } from "react-router-dom";
import Profiles from "../components/Profiles/Profiles";

const User = ()=>{
    const {page=1} = useParams()
    // console.log(page)
  
    return (
      <div>
        <h2 style={{ fontWeight: "800", fontStyle: "italic"}}>
          Users <span style={{color: "red" }}>Profile</span>
        </h2>
        <Profiles page={page}/>
      </div>
    );
}
export default User