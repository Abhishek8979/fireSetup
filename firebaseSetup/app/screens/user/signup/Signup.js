import React, {useState} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import firebase from 'react-native-firebase'
import {useSelector, useDispatch} from 'react-redux'
import actions from '../action'
import {useNavigation}  from 'react-navigation-hooks'


function UserScreen() {
    //const { navigate } = useNavigation();
    const [mail, setMail] = useState(mail)
    const [pass, setmail] = useState(pass)
    const [mob, setmob] = useState(mob)
    const [con, setcon] = useState(con)
    const [check, setCheck] = useState(check)

    console.log("mobile Number",mob)
    const { navigate } = useNavigation();
    //   const counter = useSelector(state => state.mail)
    //   const currentUser = useSelector(state => state.pass)
    //   console.log("print the saved email",counter)

    const dispatch = useDispatch()

    console.log("this is the usename",mail)
    console.log("this is the usename",pass)
    console.log("this is conformation",con)


    return(
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
                <View style={{height:40, width:300, backgroundColor:'grey',
           justifyContent:'center', borderRadius:10,borderWidth:2}}>
                <TextInput
                style={{fontSize:20}}
                placeholder="Enter the email"
                value={mail}
                onChangeText={text => setMail(text)}
                >
                </TextInput>
                </View>
                <View style={{height:40, width:300, backgroundColor:'grey',
           justifyContent:'center', marginTop:10, borderRadius:10, borderWidth:2}}>
                <TextInput
                style={{fontSize:20}}
                placeholder="Enter the Password"
                value={pass}
                onChangeText={text => setmail(text)}
                >
                </TextInput>
                </View>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,
                alignItems:"center", justifyContent:"center", marginTop:10}}
                onPress={()=>signUpValidation()} >
                <Text>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{backgroundColor:'red', height:25, width:60,
           marginTop:10,
            alignItems:"center", justifyContent:"center"}}
            onPress={()=>navigate('login')} >
                <Text>Login</Text>
            </TouchableOpacity>
            <TextInput
            style={{fontSize:20, marginTop:10}}
            placeholder="Enter the Number"
            value={mob}
            keyboardType="number-pad"
            onChangeText={text => setmob(text)}>
            </TextInput>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,marginTop:10,
                alignItems:"center", justifyContent:"center"}}
                onPress={()=>mobLogin()} >
                <Text>Enter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,marginTop:10,
                alignItems:"center", justifyContent:"center"}}
                onPress={()=>forgetPass()} >
                <Text>Forget Password</Text>
            </TouchableOpacity>
            <TextInput
            style={{fontSize:20, marginTop:10}}
            placeholder="Enter the Conformation Number"
            value={check}
            keyboardType="number-pad"
            onChangeText={text => setCheck(text)}>
            </TextInput>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,marginTop:10,
                alignItems:"center", justifyContent:"center"}}
                onPress={()=>checkVerification()} >
                <Text>Check</Text>
            </TouchableOpacity>
        </View>
    )

    function signUpValidation(){
        //const { email, password } = this.state
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!mail && !pass) {
            alert("enter your email & password")
            return
        }else if (mail == '') {
            alert("enter your email")
            return
        } else if (pass == '') {
            alert("enter password valide")
            return
        }
        console.log("this this this", mail,pass)
        let data = {mail,pass}
        dispatch(actions.addUser(data))
        // firebase.auth().createUserWithEmailAndPassword(mail.firstName, pass.lastName)
        //     .then((res) => {
        //         console.log('res', res);
        //         // this.props.navigation.navigate('login')
        //     })
        //     .catch(err => {
        //         alert(err.message)
        //     })

    }

    function checkVerification(){
        if (check.length == 6) {
            con
              .confirm(check)
              .then(user => {
                //this.setState({ userId: user.uid })
                alert(`Verified! ${user.uid}`)
              })
              .catch(error => {
                alert(error.message)
                console.log(error)
              })
          } else {
            alert('Please enter a 6 digit OTP code.')
          }
    }

   
   
    function mobLogin(){
        firebase
      .auth()
      .signInWithPhoneNumber(mail)
      .then(confirmResult => setcon(confirmResult)
      )
      .catch(error => {
        alert(error.message)
        console.log(error)
      })
  };


    function forgetPass(){
        firebase.auth().sendPasswordResetEmail(mail)
      .then(
        //   function (user) {
        alert('Please check your email...')
    //   }
      ).catch(function (e) {
        console.log(e)
      })
    }
}

export default UserScreen