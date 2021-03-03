import React, { Component } from 'react';
import {Text,ScrollView,View,Image,StyleSheet,Dimensions, TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Content, ListItem,Item,Icon,Input,fixedLabel,CheckBox ,
  CardItem,Body,Radio, Label, Thumbnail, Footer,FooterTab,Button } from 'native-base';
  const {width,height}= Dimensions.get('window')

  export default class Products extends React.Component{


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

 
  render() {
        
    const {navigate} = this.props.navigation
    
    return (
        <View style={{backgroundColor:"#FFF",height:"100%"}}>
        <Image source ={require('../images/i.png')}
            style={{width:"100%",height:"25%"}}
        />
        <ScrollView style={{flex:1}}> 
       
       <View  style={{width:width,height:height/2}}>
             <Image source ={require('../images/image10.jpg')}
               style={{width:width,height:'100%'}}
             /> 
      </View>
      <View  style={{width:width,height:height/2,marginTop:height-480}}>
             <Image source ={require('../images/image8.jpg')}
               style={{width:width,height:'100%'}}
             /> 
      </View>
      <View  style={{width:width,height:height/2,marginTop:height-480}}>
             <Image source ={require('../images/image9.png')}
               style={{width:width,height:'100%'}}
             /> 
      </View>

      <View  style={{width:width,height:height/2,marginTop:height-600}}>
             <Image source ={require('../images/image1.png')}
               style={{width:width,height:'100%'}}
             /> 
      </View>
      
      <View  style={{width:width,height:height/2,marginTop:height-480}}>
             <Image source ={require('../images/image3.jpeg')}
               style={{width:width,height:'100%'}}
             /> 
      </View>
      
      <View  style={{width:width,height:height/2,marginTop:height-480}}>
             <Image source ={require('../images/image4.jpg')}
               style={{width:width,height:'100%'}}
             /> 
      </View>
      
      <View  style={{width:width,height:height/2,marginTop:height-500}}>
             <Image source ={require('../images/image2.jpg')}
              style={{width:width,height:'100%'}}
             /> 
      </View>
     
      </ScrollView>
      <Footer > 
          <FooterTab style={{ backgroundColor:"coral"}} >
            <Button active={this.state.tab1} onPress={()=>navigate('Register')}>
              <Icon active={this.state.tab1} name="apps" style={{color:"white"}} />
              <Text style={{color:"white"}} >Appli</Text>
            </Button>
            <Button active={this.state.tab2}  onPress={()=>navigate('Register')}>
              <Icon active={this.state.tab2} name="home" style={{color:"white"}}  />
              <Text style={{color:"white"}} >Home</Text>
            </Button>
            <Button active={this.state.tab3}  onPress={()=>navigate('Products')}>
              <Icon active={this.state.tab3} name="briefcase" style={{color:"white"}} /> 
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
