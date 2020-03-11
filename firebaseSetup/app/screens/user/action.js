function addUser(data){
    console.log("This is mail, pass",data)
    return {
        type: "ADD_USER",
        payload: data
        
    }
}
function loginUser(data){
    console.log("This is mail, pass",data)
    return {
        type: "LOGIN_USER",
        payload: data
        
    }
}


export default {
    addUser,
    loginUser
}