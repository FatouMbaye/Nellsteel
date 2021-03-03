import React,{useState} from 'react';
import {Text,View,Image, TextInput,TouchableOpacity, floatingLabel} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Item, Body,Button,Left, Right,Accordionm } from 'native-base';
import Icon from '@expo/vector-icons/AntDesign';


//import { StackNavigator } from 'react-navigation';
//import { set } from 'react-native-reanimated';



export default function Login({navigation}) {

    const {navigate} = navigation
     const [mail, setMail]=useState("")
     const [password, setPassword]=useState("")

      const valider=()=>{
            if(mail && password){
         navigate('Register')
       //  navigate('Contact')
            
           
        
            }else{
                alert("Veillez remplir tous les champs")
            }
          
        }  
        
     
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/i.png')}
                    style={{width:"100%",height:"35%"}}
                />
                <Text
                 style={{
                     fontSize:25,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"#ef6c38",
                 }}
                >      NELL STEEL ,</Text>

                <Text
                 style={{
                     fontSize:25,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"black",
                 }}
                >  Une référence en Acier</Text>
               
               
                

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#ef6c38",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    
                    <Icon name="mail" color="#00716F" size={24}/> 
                    <TextInput  
                       keyboardType = "email-address"
                       placeholder="Entrer votre mail" 
                       placeholderTextColor="#808080"
                        style={{paddingHorizontal:10}}
                        value={mail}
                        onChangeText = {(val)=>setMail(val) }

                 />

                   
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#ef6c38",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" pass={true} color="#00716F" size={24}/>
                    <TextInput 
                    secureTextEntry
                     placeholder="Entrer votre mot de Passe"  
                     placeholderTextColor="#808080"
                     style={{paddingHorizontal:10}}
                     value={password}
                     onChangeText = {(val)=>setPassword(val) }
                     
                    />
                        
                </View>


                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#ef6c38",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <TouchableOpacity
                          onPress={valider}
                    >
                    <Text 
                       
                          style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Authentifier</Text>
                    </TouchableOpacity>
                </View>

       
               
            </View>
        )

   
}