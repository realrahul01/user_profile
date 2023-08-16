import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const MasterLayout = ()=>{

    return(
    <div>
        <Header/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </div>
    )
}
export default MasterLayout;