import React,{useState} from 'react';
import {Text,View,Image, TextInput,TouchableOpacity, floatingLabel} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Item,Label,Input,Form, Body,Button,Left, Right,Accordionm } from 'native-base';
import Icon from '@expo/vector-icons/AntDesign'; 
//import { StackNavigator } from 'react-navigation';
//import { set } from 'react-native-reanimated';



export default function Login({navigation}) {

    const {navigate} = navigation
     const [mail, setMail]=useState("")
     const [password, setPassword]=useState("")

      const valider=()=>{
            if(mail && password){
              //  navigate('Register')
              navigate('Tailles')
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
                    marginHorizontal:60,
                    borderWidth:2,
                    marginTop:30,
                    paddingHorizontal:10,
                    borderColor:"#ef6c38",
                    borderRadius:20,
                    paddingVertical:2
                }}>

            <Item fixedLabel>
              <Label>Quantité 6mm (en kg) </Label>
              <Input />
              </Item>   
            <Input />   
      </View>

   
            </View>
        )

   
}


/*[
  {
      "id":0,
      "key":"2 mm",
      "checked":false
  },{
      "id":1,
      "key":"3 mm",
      "checked":false
  },{
      "id":2,
      "key":"4 mm",
      "checked":false
  },{
      "id":3,
      "key":"6 mm",
      "checked":false
  },{
      "id":4,
      "key":"7 mm",
      "checked":false
  },{
      "id":5,
      "key":"8 mm",
      "checked":false
    },{
      "id":6,
      "key":"10 mm",
      "checked":false
    },{
      "id":7,
      "key":"32 mm",
      "checked":false
}
]
*/