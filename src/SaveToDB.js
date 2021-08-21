import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity, Alert, Linking, AsyncStorage} from 'react-native';
import DatePicker from 'react-native-datepicker'

class SaveToDB extends Component {
  constructor(props) {
    super(props);
    this.state = {

        fullname : '',
        gender : '',
        email: '',
        salary : '',
        dob : new Date()
    };
  }

  SaveData = () =>{
    const {fullname} = this.state;
    const {gender} = this.state;
    const {email} = this.state;
    const {salary} = this.state;
    const {dob} = this.state;

    fetch('https://lantern-jawed-breez.000webhostapp.com/people.php',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: fullname,
            gender: gender,
            email: email,
            salary: salary,
            dob: dob
          })
    }).then((response) =>response.json())
    .then((responseJson) => {
        if(responseJson === 'OK')
        {
            Alert.alert('Data Saved!');
        }
        else
        {
            Alert.alert(responseJson);
        }
    }).catch((error) =>{
        console.error(error);
    });
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold' ,color: '#030303'}}> Save Data</Text>

        <TextInput
            placeholder = " Full Name"
            onChangeText={fullname => this.setState({fullname})}
            style={styles.input}
            value={this.state.myNumber}
            maxLength={15} 
        />
        
        <TextInput
            placeholder = " Gender"
            onChangeText={gender => this.setState({gender})}
            style={styles.input}
            value={this.state.myNumber}
            maxLength={15} 
        />

        <TextInput
            placeholder = " Email"
            onChangeText={email => this.setState({email})}
            style={styles.input}
           value={this.state.myNumber}
            maxLength={150} 
        />

        <TextInput
            placeholder = " Salary"
            onChangeText={salary => this.setState({salary})}
            style={styles.input}
            value={this.state.myNumber}
            maxLength={15} 
        />

        <DatePicker
        style={{width: 300}}
        date={this.state.dob}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1955-01-01"
        maxDate="2024-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(dob) => {this.setState({dob: dob})}}
      />

        <View style={styles.space2} />
        <TouchableOpacity onPress={() => {this.SaveData();}} style={styles.button}>
        <Text style={styles.loginbtn}> Save to DB </Text>
         </TouchableOpacity>
         <View style={styles.space} />

      </View>
    );
  }
}

export default SaveToDB;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent :"center",
        alignItems:"center"
    },

    input:{
        width:300,
        height:55,
        margin:10,
        fontFamily : 'Nunito',
        fontSize : 15,
        fontWeight : 'bold',
        borderBottomColor:'#030303',
        borderBottomWidth: 1,
        marginBottom: 30,
    },

    button:{
        width:300,
        height: 52,
        padding:10,
        borderRadius:10,
        backgroundColor:'#030303',
        alignItems: 'center'
    },

    Regbutton:{
        width:300,
        height:52,
        padding:10,
        borderRadius:10,
        backgroundColor:'#ffffff',
        alignItems: 'center',
        borderWidth : 2,
        borderColor: '#030303'
    },


    loginbtn:{
        color:'#ffff',
        fontSize : 20,
        fontWeight : 'bold'
    },

    loginbtn2:{
        color:'#030303',
        fontSize : 20,
        fontWeight : 'bold'
    },

    logo:{
    width:150,
    height:150
    },

    space2: {
        width: 10, 
        height: 30,
      },

    space: {
        width: 10, 
        height: 10,
      },

      imageStyle: {
        flexDirection:'row',
        justifyContent:'center',
        padding: 5,
        margin: 2,
        height: 15,
        width: 15,
        resizeMode: 'stretch',
        marginBottom: 8,
        marginTop : 8,
        alignItems: 'center',
      },
});