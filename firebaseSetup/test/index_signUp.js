import React, { Component } from 'react';
import * as _ from 'lodash'
import firebase, { Firebase } from 'react-native-firebase';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as actions from './action'
import { connect } from 'react-redux';
import { images } from '../../themes'
import styles from './styles'
export default class SignUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmpass: ''
        }
        this.signUpValidation = this.signUpValidation.bind(this)
    }

    signUpValidation = () => {
        const { email, password } = this.state
        if (!email && !password) {
            alert("enter your email & password")
            return
        }else if (email == '') {
            alert("enter your email")
            return
        } else if (password == '') {
            alert("enter password valide")
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('res', res);
                this.props.navigation.navigate('login')
            })
            .catch(err => {
                alert(err.message)
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signView}>
                    <Text style={styles.signText}> Sign Up </Text>
                </View>
                <Text style={styles.textTitle}>Email</Text>
                <TextInput style={styles.textInput} placeholder="email"
                    onChangeText={(email) => this.setState({ email })} />
                <Text style={styles.textTitle}>Password</Text>
                <TextInput style={styles.textInput} placeholder="password"
                    onChangeText={(password) => this.setState({ password })} />
                <Text style={styles.textTitle}>Confirmpass</Text>
                <TextInput style={styles.textInput} placeholder="confirmpass"
                    onChangeText={(confirmpass) => this.setState({ confirmpass })} />
                <TouchableOpacity style={styles.button} onPress={this.signUpValidation}>
                    <Text style={styles.signupText}>SIGNUP</Text>
                </TouchableOpacity>
            </View>
        )
    }
};


// const Conatiner = connect(null)(LoginScreen)

// export default Conatiner;