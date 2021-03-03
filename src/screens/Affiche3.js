import React from 'react';
//import React, { Component } from 'react';
import {Text,ScrollView,View,Image,StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem,Item,Icon,Input,fixedLabel,CheckBox ,
  CardItem,Body,Radio, Label, Footer,FooterTab,Button } from 'native-base';
//import Icon from '@expo/vector-icons/AntDesign';

export default class Affiche3 extends React.Component{

               
  /*constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  /*onValueChange(value: String) {
    this.setState({
      selected: value
    });
  }    */
    state={
    one:false,
    two: false
     }
       onePressed(){
        this.setState({one:true,two:false});
          }
         twoPressed(){
        this.setState({one:false,two:true});
          }
       state={
       three:false,
       four:false
              }
          threePressed(){
            this.setState({three:true,four:false});
              }
            fourPressed(){
            this.setState({three:false,four:true});
              }

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
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"25%"}}
                />
            
            <Text
                  style={{
                    fontSize:15,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    marginTop:25,
                    color:"green"
                     
                 }}
                >A LIVRER </Text>
   
   <ScrollView>
           <View  style={{
                    marginHorizontal:35,
                    marginTop:0,
                    backgroundColor:"",
                    paddingVertical:5,
                    borderRadius:23
                }}>
          
        
          <ListItem>
            <Body>
              <Text>OUI</Text>
            </Body>
            <Radio  selected={this.state.one}
             onPress={() => this.onePressed()}   
            />    
          </ListItem>
          <CardItem fixedLabel  style={{display:this.state.one ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label style={{color:'blue'}}> LIVRAISON </Label>   
           <Input    style={{display:this.state.one ? 'flex': 'none',
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder=' Entrer une Adresse '
                    keyboardType=""
                    placeholderTextColor='' />
              </CardItem> 

          <ListItem>
            <Body>
              <Text>NON</Text>
            </Body>
            <Radio selected={this.state.two}
             onPress={() => this.twoPressed()}
             />
          </ListItem> 
        
         </View>  
     
          
   <Text
                  style={{
                    fontSize:15,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    marginTop:35,
                    color:"green"
                     
                 }}
                >     A DECHARGER </Text>

          <View  style={{
                    marginHorizontal:35,
                    marginTop:0,
                    backgroundColor:"",
                    paddingVertical:5,
                    borderRadius:23
                }}>
          
       
          <ListItem>
            <Body>
              <Text>OUI</Text>
            </Body>
            <Radio  selected={this.state.three}
             onPress={() => this.threePressed()}
             />
          </ListItem>
          <CardItem fixedLabel  style={{display:this.state.three ? 'flex': 'none',
             
               }}>
              <Label style={{color:'blue'}} >DECHARGEMENT</Label>   
           <Input    style={{display:this.state.three ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='Entrer Adresse'
                    keyboardType=""
                    placeholderTextColor='' />
              </CardItem> 

         
          <ListItem>
            <Body>
              <Text>NON</Text>
            </Body>
            <Radio  selected={this.state.four}
             onPress={() => this.fourPressed()}
             />
          </ListItem>

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
                 onPress={()=>navigate('Login')}
                 >

                    <Text 
                      
                          style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>ValiderCommande</Text>
                     </TouchableOpacity>
                </View>
             
             </ScrollView>

             <Footer > 
          <FooterTab style={{ backgroundColor:"coral"}} >
            <Button active={this.state.tab1} onPress={()=>navigate('Register')}>
              <Icon active={this.state.tab1} name="apps" style={{color:"white"}}  />
              <Text style={{color:"white"}} >Appli</Text>
            </Button>
            <Button active={this.state.tab2}  onPress={()=>navigate('Login')}>
              <Icon active={this.state.tab2} name="home" style={{color:"white"}}  />
              <Text style={{color:"white"}} >Home</Text>
            </Button>
            <Button active={this.state.tab3}  onPress={()=>navigate('Products')}>
              <Icon active={this.state.tab3} name="briefcase" style={{color:"white"}}  /> 
              <Text style={{color:"white"}} >produits</Text>
            </Button>
            <Button active={this.state.tab4}   onPress={()=>navigate('Contact')} >
              <Icon active={this.state.tab4} name="contact" style={{color:"white"}}  />
              <Text style={{color:"white"}} >Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
           
          
              </View>
               )
       }
 }