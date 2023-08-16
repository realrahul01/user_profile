import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import route from '../routes/route.json'

export const PrivatePageHoc = (Component)=>{
    const NewComponent = (props)=>{
        const {isUserLogin} = useContext(AuthContext)        
        return(
            <>
                {isUserLogin && (
                    <Component {...props}/>
                )}
                {!isUserLogin &&(
                    <Navigate to={`/${route.LOGIN}`}/>              //this is the absolute path instead this can write '/login'
                )}
            </>
        )
    }
    return NewComponent
}
export default PrivatePageHoc;