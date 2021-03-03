import React from 'react';
import {Text,View,Image, TextInput,TouchableOpacity,ScrollView} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, CardItem,fixedLabel,Input,Label,Body,Button,Left, 
  Right,Accordionm } from 'native-base';
import Icon from '@expo/vector-icons/AntDesign';

export default class Affiche2 extends React.Component{

        
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
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
  toggleSwitch5() {
    this.setState({
      checkbox5: !this.state.checkbox5
    });
  }
  toggleSwitch6() {
    this.setState({
      checkbox6: !this.state.checkbox6
    });
  }
  toggleSwitch7() {
    this.setState({
      checkbox7: !this.state.checkbox7
    });
  }
  toggleSwitch8() {
    this.setState({
      checkbox8: !this.state.checkbox8
    });
  }

    render(){
        const {navigate} = this.props.navigation


        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image3.jpeg')}
                    style={{width:"100%",height:"20%"}}
                />
            
         
                  <Text
                 style={{
                  fontSize:15,
                  fontFamily:"SemiBold",
                  alignSelf:"center",
                  marginTop:5,
                  color:"green"
                     
                 }}
                >    Fer FE500B</Text>
                
                <ScrollView>   
                <View  style={{
                    marginHorizontal:40,
                    marginTop:0,
                    backgroundColor:"",
                    paddingVertical:5,
                    borderRadius:23
                }}>
              
              <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox  color="#000"
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
              
          <ListItem button onPress={() => this.toggleSwitch5()}>
            <CheckBox   color="#000"
              checked={this.state.checkbox5}
              onPress={() => this.toggleSwitch5()}
            />
            <Body>
              <Text>   16 mm</Text>
              <CardItem fixedLabel  style={{display:this.state.checkbox5 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox5 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
              </CardItem>  
            </Body>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch6()}>
            <CheckBox
               color="#000"
              checked={this.state.checkbox6}
              onPress={() => this.toggleSwitch6()}
            />
            <Body>
              <Text>    20 mm</Text>
              <CardItem fixedLabel  style={{display:this.state.checkbox6 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox6 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
              </CardItem>  
            </Body>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch7()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox7}
              onPress={() => this.toggleSwitch7()}
            />
            <Body>
              <Text>    25 mm</Text>
              <CardItem fixedLabel  style={{display:this.state.checkbox7 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox7 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:0,padding:2}}                  
                    placeholder='qte'
                    keyboardType="numeric"
                    placeholderTextColor='' />
              </CardItem>  
            </Body>
          </ListItem>

          <ListItem button onPress={() => this.toggleSwitch8()}>
            <CheckBox
             color="#000"
              checked={this.state.checkbox8}
              onPress={() => this.toggleSwitch8()}
            />
            <Body>
              <Text>   32 mm</Text>    
              <CardItem fixedLabel  style={{display:this.state.checkbox8 ? 'flex': 'none',
              // alignItems:"center"
               }}>
              <Label> Qte(kg) </Label>
               
           <Input    style={{display:this.state.checkbox8 ? 'flex': 'none',
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
                    marginTop:0,
                    backgroundColor:"#ef6c38",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                       
                       <TouchableOpacity
                       onPress={()=>navigate('Affiche22')}
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
               )
       }
 }