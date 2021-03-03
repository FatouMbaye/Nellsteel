import React from 'react';
import {Text,View,Image, TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem, CheckBox, Body } from 'native-base';
import Icon from '@expo/vector-icons/AntDesign';
const Tailledata = require('./Tailles.json');


export default class Affiche22 extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      Values: ["6 mm","8 mm","10 mm","12 mm"],
      Data:[]
    };}
 componentDidMount(){
   let Values=this.state.Values
   let Tailles=[]
    for(let i=0;i<Values.lenght;i++){
        Tailles.push({
        id:i,
        value:Values[i],
        checked:false
          })
           }
       this.setState({Data: Fruits})
   }

 /* renderCheckboxes(){
     return this.state.Data.map((item, key)=>{
            return (
               <TouchableOpacity key={key} style={{flexDirection:"row">
                     {item.checked == true
                      ?(<Image source={require('./carre.jpg')} style={Styles.chekboxes} />)
                      : (<Image source={require('./ok.png')} style={Styles.chekboxes} />) }
                       
               </TouchableOpacity>
               )
               })
         }
  /*
  /*onValueChange(value: String) {
    this.setState({
      selected: value
    });
  }  
 */

    render(){
        const {navigate} = this.props.navigation


        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image4.jpg')}
                    style={{width:"100%",height:"20%"}}
                />
            
         
                  <Text
                 style={{
                  fontSize:15,
                  fontFamily:"SemiBold",
                  alignSelf:"center",
                  marginTop:10,
                  color:"green"
                     
                 }}
                >    POINTES</Text>
                

                <View  style={{
                    marginHorizontal:40,
                    marginTop:0,
                    backgroundColor:"",
                    paddingVertical:5,
                    borderRadius:23
                }}>

                   <ListItem> 
             <CheckBox checked={this.state.one}
             onPress={() => this.onePressed()}
             />
            <Body>
              <Text>    2 mm</Text>
            </Body>
          </ListItem>
          <ListItem>
          <CheckBox checked={this.state.two}
             onPress={() => this.twoPressed()}
             />
            <Body>
              <Text>    3 mm</Text>
            </Body>
          </ListItem>
          <ListItem>
          <CheckBox  checked={this.state.three}
             onPress={() => this.threePressed()}
             />
            <Body>
              <Text>    4 mm</Text>  
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={this.state.four}
             onPress={() => this.fourPressed()}
             />
            <Body>
              <Text>    6 mm</Text>
            </Body>
          </ListItem>
          <ListItem>
          <CheckBox checked={this.state.five}
             onPress={() => this.fivePressed()}
             />
            <Body>
              <Text>    7 mm</Text>
            </Body>
          </ListItem>
          <ListItem>
          <CheckBox checked={this.state.six}
             onPress={() => this.sixPressed()}
             />
            <Body>
              <Text>    8 mm</Text>
            </Body>
          </ListItem>
          <ListItem>
          <CheckBox color="green" checked={this.state.seven}
             onPress={() => this.sevenPressed()}
             />
            <Body>
              <Text>    10 mm</Text>
            </Body>
          </ListItem>
          <ListItem>
          <CheckBox color="green" checked={this.state.height}
             onPress={() => this.heightPressed()}
             />
              <Body>
              <Text>    32 mm</Text>
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
                   onPress={()=>navigate('Affiche3')}
                   >
                    <Text 
                     
                          style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Commande</Text>
                     </TouchableOpacity>
                </View>


              </View>
               )
       }
 }