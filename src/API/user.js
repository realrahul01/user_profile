// in crud operation this is read 
export const userData = (page=1)=>{
   return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>res.json())
}

//Deletion API
export const deleteUser = (userId)=>{
    return fetch(`https://reqres.in/api/users/${userId}`,{
        method:'DELETE',
    }).then((res)=>res.status==204)

}

//creation of API post method
export const createUser = (userData)=>{
    const reqObj = {
        method:"POST",
        body: JSON.stringify(userData)
    }
    return fetch('https://reqres.in/api/users',reqObj)               // using body: JSON.stringify(userData) to send the data to api by passing an userDatat argument
    .then((res)=>res.json())
}