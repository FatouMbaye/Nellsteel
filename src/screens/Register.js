import React,{useState} from 'react';
import {Text,View,ScrollView,Image, TextInput,StyleSheet, radioButton, Container,TouchableOpacity } from 'react-native';
import {  Header, Content,ListItem, CheckBox, Body,Icon, Right,Title,Left,Thumbnail, Footer,FooterTab,Button } from 'native-base';
import { StatusBar } from 'expo-status-bar';

//import Icon from '@expo/vector-icons/AntDesign';

export default function Register ({navigation})  {

    const {navigate} = navigation
    
    const [nom, setNom]=useState("")
    const [mail, setMail]=useState("")
    const [tel, setTel]=useState("")
    const [entreprise, setEntreprise]=useState("")

     const valider=()=>{
           if(nom && mail && tel && entreprise){
               navigate('Affiche')
           }else{
               alert("Veillez remplir tous les champs")
           }
         
       }  

   
        return(
            
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image2.jpg')}
                    style={{width:"100%",height:"35%"}}
                />

         
                <Text
                 style={{
                     fontSize:30,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     color:"#ef6c38"
                 }}
                >NELL STEEL</Text>

      <ScrollView> 
                 <Text
                 style={{
                     fontSize:20,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:0,
                     color:"green"
                     
                 }}
                >    Demander un Devis</Text>


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
                  
                  <Icon name="person" size={20} style={{color:"coral"}}/>
                    <TextInput 
                        placeholder="Enter Votre prenom et nom"
                        placeholderTextColor="#808080"
                        style={{paddingHorizontal:10}}
                        value={nom}
                        onChangeText = {(val)=>setNom(val) }
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
                   
                   <Icon name="mail"  size={15} style={{color:"coral"}}/>
                   <TextInput 
                        placeholder="Entrer votre mail"
                        keyboardType = "email-address"
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
                   
                   <Icon name="call" size={15} style={{color:"coral"}} />
                   <TextInput 
                        placeholder="Entrer votre Numéro téléphone"
                        keyboardType="numeric"
                        placeholderTextColor="#808080"
                        style={{paddingHorizontal:10}}
                        value={tel}
                        onChangeText = {(val)=>setTel(val) }
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
                    <Icon name="home"  size={15} style={{color:"coral"}}/>
                   <TextInput 
                        placeholder="Votre Entreprise"
                        placeholderTextColor="#808080"
                        style={{paddingHorizontal:10}}
                        value={entreprise}
                        onChangeText = {(val)=>setEntreprise(val) }
                    />
                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:15,
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
                    }}>Demander Devis</Text>
                        </TouchableOpacity>
                </View>

         </ScrollView>
                <Footer > 
          <FooterTab style={{ backgroundColor:"coral"}} >
            <Button active onPress={()=>navigate('Register')}>
              <Icon active name="apps" style={{color:"white"}}/>
              <Text style={{color:"white"}}>Appli</Text>
            </Button>
            <Button  onPress={()=>navigate('Register')}>
              <Icon  name="home" style={{color:"white"}}/>
              <Text style={{color:"white"}} >Home</Text>
            </Button>
            <Button   onPress={()=>navigate('Products')}>
              <Icon  name="briefcase" style={{color:"white"}}/> 
              <Text style={{color:"white"}}> produits</Text>
            </Button>
            <Button   onPress={()=>navigate('Contact')} >
              <Icon  name="contact" style={{color:"white"}}/>
              <Text style={{color:"white"}} >Contact</Text>
            </Button>
          </FooterTab>
        </Footer> 
        </View>     
          
        )
               
}