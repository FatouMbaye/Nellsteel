import React from 'react';
//import * as React from 'react';
//import React, { Component } from 'react';
import {Text,ScrollView,View,Image,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem,Item,Icon,Input,fixedLabel,CheckBox ,
  CardItem,Body,Radio, Label, Footer,FooterTab,Button } from 'native-base';
 // import { FontAwesome } from '@expo/vector-icons';
//import Icon from '@expo/vector-icons/AntDesign';

export default class Contact extends React.Component{
       
              constructor(props) {
                super(props);
                this.state = {
                  tab1: false,
                  tab2: false,
                  tab3: true,
                  tab4: false
                };
              }
              toggleTab1() {
                this.setState({
                  tab1: true,
                  tab2: false,
                  tab3: false,
                  tab4: false
                });
              }
              toggleTab2() {
                this.setState({
                  tab1: false,
                  tab2: true,
                  tab3: false,
                  tab4: false
                });
              }
              toggleTab3() {
                this.setState({
                  tab1: false,
                  tab2: false,
                  tab3: true,
                  tab4: false
                });
              }
              toggleTab4() {
                this.setState({
                  tab1: false,
                  tab2: false,
                  tab3: false,
                  tab4: true
                });
              }
   
    render(){
        const {navigate} = this.props.navigation

        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/i.png')}
                    style={{width:"100%",height:"25%"}}
                />

            <ScrollView> 
         
             
            <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,   
                    marginTop:50,
                    paddingHorizontal:10,
                    paddingVertical:2
                 
                }}> 
                    <Icon name="home" color="#00716F" size={24}/> 
                    <Text style={{  fontSize:15,
                    fontFamily:"SemiBold",color:"green"
                    }}> Km 45, Diamniadio Route de Mbour,   BP 29 659, Dakar - Sénégal </Text> 
              
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,   
                    marginTop:50,
                    paddingHorizontal:10,
                    paddingVertical:2
                 
                }}> 
                    <Icon name="mail" color="#00716F" size={24}/> 
                    <Text style={{  fontSize:15,
                    fontFamily:"SemiBold",color:"green"
                    }}> commercial@nellsteel.com</Text> 
              
                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,   
                    marginTop:50,
                    paddingHorizontal:10,
                    paddingVertical:2
                 
                }}> 
                    <Icon name="call" color="#00716F" size={24}/> 
                    <Text style={{  fontSize:15,
                    fontFamily:"SemiBold",color:"green"
                    }}>  +221 33 836 46 70 </Text> 
                </View>
                
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,   
                    marginTop:0,
                    paddingHorizontal:10,
                    paddingVertical:2
                 
                }}> 
                     <Text style={{  fontSize:15,
                    fontFamily:"SemiBold",color:"green"
                      }}>     +221 78 631 79 11 </Text> 
                </View>
             
             </ScrollView>

             <Footer > 
          <FooterTab style={{ backgroundColor:"coral"}} >
            <Button onPress={()=>navigate('Register')}>
              <Icon  name="apps" style={{color:"white"}} />
              <Text style={{color:"white"}} >Appli</Text>
            </Button>
            <Button  onPress={()=>navigate('Register')}>
              <Icon  name="home" style={{color:"white"}}  />
              <Text style={{color:"white"}} >Home</Text>
            </Button>
            <Button  onPress={()=>navigate('Products')}>
              <Icon  name="briefcase" style={{color:"white"}} /> 
              <Text style={{color:"white"}} >produits</Text>
            </Button>
            <Button active  onPress={()=>navigate('Contact')} >
              <Icon active name="contact" style={{color:"white"}}  />
              <Text style={{color:"white"}} >Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        
              </View>
               )
       }
 }