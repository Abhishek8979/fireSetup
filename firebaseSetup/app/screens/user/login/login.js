import React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigation}  from 'react-navigation-hooks'
import firebase from 'react-native-firebase'
import actions from '../action'


function Login(){
    const [mail, setMail] = useState(mail)
    const [pass, setmail] = useState(pass)
   
    const { navigate } = useNavigation();
    const dispatch = useDispatch()

    // const counter = useSelector(state => state.mail)
    //  const currentUser = useSelector(state => state.pass)

    return(
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <TextInput
                style={{fontSize:20}}
                placeholder="Enter the emailId"
                value={mail}
                onChangeText={text => setMail(text)}>
            </TextInput>
            <TextInput
            style={{fontSize:20}}
            placeholder="Enter the password"
            value={pass}
            onChangeText={text => setmail(text)}>
            </TextInput>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,
                alignItems:"center", justifyContent:"center"}}
                onPress={()=>loginValidation()} >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )

    function loginValidation(){
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!mail && !pass) {
          alert("Enter email or password")
          return false
        } else if (reg.test(mail) == false) {
        // else if (mail == '') {
          alert("Enter valide email")
          return false
        } else if (!pass) {
          alert("enter valide password")
          return false
        }
        let data = {mail,pass}
        dispatch(actions.loginUser(data))
        navigate('userscreen')
      }

    
    
     
}

export default Login