import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Button, Image, Platform} from 'react-native'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigation}  from 'react-navigation-hooks'
import firebase from 'react-native-firebase'
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import actions from '../action'
import images from './images'



function Login(){
    const [mail, setMail] = useState(mail)
    const [pass, setmail] = useState(pass)
    const [save, saveData] = useState(save)
   
    const { navigate } = useNavigation();
    const dispatch = useDispatch()

    // const counter = useSelector(state => state.mail)
    //  const currentUser = useSelector(state => state.pass)
    const Drawer = createDrawerNavigator();
    return(
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    )

    function HomeScreen({ navigation }) {
      return (
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
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,
                alignItems:"center", justifyContent:"center", marginTop:10}}
                onPress={()=>navigation.openDrawer()} >
                <Text>Drawer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,
                alignItems:"center", justifyContent:"center", marginTop:10}}
                onPress={()=>updateSingleData()} >
                <Text>Send Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,
                alignItems:"center", justifyContent:"center", marginTop:10}}
                 onPress={()=>retriveData()} 
                >
                <Text>Retrive Data</Text>
            </TouchableOpacity>
            <Image style={{height:100,width:60}}
            source={images.image1} />
            <TouchableOpacity style={{backgroundColor:'red', height:25, width:60,
                alignItems:"center", justifyContent:"center", marginTop:10}}
                 onPress={()=>uploadPic()} 
                >
                <Text>Upload Pic</Text>
            </TouchableOpacity>
        </View>
      );
    }
//abhishek.sharma@amplework.com
  //   function updateSingleData(){
    //this is to send data in RealTimeDatabase
  //     firebase.firestore().ref('Users').push({
  //         gmail:"test@SpeechGrammarList.com",
  //     });
  // }
  function updateSingleData(){
    //this is to send data in Firestore
    firebase.firestore().collection('Users').doc().set({
        gmail:"test@SpeechGrammarList.com",
    });
}

function uploadPic(){
  // const uploadUri = uri.replace('../signup/phone.png')
  // console.log("this is Image",uploadUri)
  //var sourcePic = {require('../signup/phone.png')};

  // var storageRef = firebase.storage().ref('Photo');
  // console.log("Print Test",storageRef)
  firebase
      .storage()
      .ref(`Photo`).putFile(images.image1)
  //  storageRef.putFile(images.image1, 
  //   {
  //    contentType: 'image/jpeg'
  //  }
   .then((snapshot)=>{
     console.log("this is snapshot",snapshot)
    alert("successfully uploaded");
  //   //blob.close();

     //resolve(snapshot);

   }).catch((error)=>{

     alert(error);

   });
}
// function retriveData(){
//   //In real time database
// var recentPostsRef = firebase.database().ref('/store');
// recentPostsRef.once('value').then(snapshot => {
//   // snapshot.val() is the dictionary with all your keys/values from the '/store' path
//   this.setState({ stores: snapshot.val() })
// })
// }

function retriveData(){
  //In real time database
 firebase.firestore().collection('Users').get().then((snapshot)=>{
   snapshot.forEach(doc=>{
     if(doc._data.gmail==="test@SpeechGrammarList.com"){
     console.log(doc._data.gmail)
     console.log(doc._data.name)
     console.log(doc._data.mapData.firstName)
     }
   })
  console.log('ajsdfjasaiooooloprint -', snapshot.docs);
});
// recentPostsRef.once('value').then(snapshot => saveData(snapshot.val()),
// console.log("database showing",save)
  // snapshot.val() is the dictionary with all your keys/values from the '/store' path
}

    function NotificationsScreen({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
    }





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
        //writeUserData()
        dispatch(actions.loginUser(data))
        //navigate('userscreen')
      }

    //   function createUserDatabase(getuid){
    //     // the_uid = userId
    //     const data = {
    //         contact: mail,
    //     }
    //     // firebase.firestore().doc(`users/${getuid}`).set(data)
    //     firebase.firestore().doc(`users/test`).set(data)
    //         .then(() => {
    //             console.log("New poll data sent!")
    //         })
    //         .catch(error => console.log("Error when creating new poll.", error));
    // }
    
    function writeUserData(){
      firebase.
      ref('UsersList/').push({
          abhishek,
          shamra,
      }).then((data)=>{
          //success callback
          console.log('data ' , data)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
  }
     
}

export default Login