import React from 'react';
import {Text,View,Image, TextInput,TouchableOpacity,TouchableOpacityBase,ScrollView} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Button, Body ,Left,fixedLabel,Item,Label,Input,Form,
   Right,Accordionm,Footer,FooterTab, Card, CardItem} from 'native-base';
import { registerRootComponent } from 'expo';
import Icon from '@expo/vector-icons/AntDesign';

export default class Affiche extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
      //navigate('Affiche')
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }

  render(){
    const {navigate} = this.props.navigation
   
    
    return(
     
   <View style={{backgroundColor:"#FFF",height:"100%"}}>
          <Image source ={require('../images/image1.png')}
              style={{width:"100%",height:"20%"}}
          />
          
          <Text
                 style={{
                     fontSize:15,
                     fontFamily:"SemiBold",
                     alignSelf:"center",
                     marginTop:30,
                     color:"green"
                     
                 }}
                >    Fer FE400 </Text>
           
           <ScrollView>
         <View  style={{
                    marginHorizontal:40,
                    marginTop:5,
                    backgroundColor:"",
                    paddingVertical:0,
                    borderRadius:23
                }}> 
             
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
            color="#000"
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>   6 mm</Text>  
              <CardItem fixedLabel  style={{display:this.state.checkbox1 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox1 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
            </CardItem>    
            </Body>      
          </ListItem>  

          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
             color="#000"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>    8 mm</Text>     
              <CardItem fixedLabel  style={{display:this.state.checkbox2 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox2 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
              </CardItem>   
            </Body>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
            color="#000"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text>    10 mm</Text>
              <CardItem fixedLabel  style={{display:this.state.checkbox3 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox3 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
              </CardItem>  
            </Body>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text>   12 mm</Text>
              <CardItem fixedLabel  style={{display:this.state.checkbox4 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox4 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
              </CardItem>  
            </Body>
          </ListItem>
        </View>
        
        <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:5,
                    backgroundColor:"#ef6c38",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                     
                     <TouchableOpacity
                      onPress={()=>navigate('Affiche1')}
                      >
                    <Text 
                        
                          style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Commander</Text>
                     </TouchableOpacity>
                </View>
                
                </ScrollView>
              
       </View>

    );
  }
}