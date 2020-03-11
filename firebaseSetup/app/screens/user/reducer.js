 import firebase from 'react-native-firebase'

const add_user = (state =  {mail:'',pass:''},action) => {
    console.log("this is the mail in reducer",action.payload)
    switch(action.type){
        case "ADD_USER":
            {
            // mail = action.payload.mail
            // pass = action.payload.pass
            firebase.auth().createUserWithEmailAndPassword(action.payload.mail,action.payload.pass)
            .then((res) => {
                console.log('res', res);
            })
            .catch(err => {
                alert(err.message)
            })
            return {
                ...state,
                mail : action.payload.mail,
                pass : action.payload.pass
                
            }
            }
        case "LOGIN_USER":
            {
                firebase.auth().signInAndRetrieveDataWithEmailAndPassword (action.payload.mail,action.payload.pass)
        .then((res) => {
            console.log('User has login successfully', res);
        })
        .catch(err => {
          alert(err.message)
        })
        return {
            ...state,
            mail : action.payload.mail,
            pass : action.payload.pass
            
        }
            }

        default:
            return 1
    }
}

export default add_user