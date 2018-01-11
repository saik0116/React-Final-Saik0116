import React, {Component} from 'react';
import { Container, Header, Title, Content, Footer,
        List,
        ListItem,
        FooterTab,
        Button, 
        Left, 
        Right,
        Spinner,
        Body, Icon, Text, View} from 'native-base';
import {ActivityIndicator} from 'react-native';


import {connect} from "react-redux";
import * as actions from "../actions"
import RestaurantInfos from "./RestaurantInfo";
import Details from "./Details";
                   


export class Main extends Component {

    listItems(){
        console.log("listItems");
        let count =0;
		
		if(this.props.isShowMain){
	        return (
            this.props.thisArray.map(item => {
            console.log(item);
                return <RestaurantInfos key={item.name} restaurant ={item} />      
            }));
		} else {
			return (<Details />);
		}
    };  
    render() {
               if(this.props.isShowMain){
    console.log("isShowMain true"); 
        if(!this.props.loadSpinner) {    
        return ( 
            <Container>
            <Header><Text>My List</Text></Header>
            
                <Button style={{ width: 400, height: 50, backgroundColor: 'powderblue', justifyContent: 'center'}} onPress = {this.props.fetchData}>
            
                    <Text id = "btn1"> Load Data < /Text>
                </Button>
            
            
        <List>{this.listItems()}</List>
         </Container> 
        ); } else {return(
            <Content>
            <Body>
                <ActivityIndicator size="large" color="#0000ff" /></Body>
            
                </Content> 
        );
        }
               
               
               
               } else {return (
            
            <Details />);}
                    
    }

};

const mapStateToProps = (state) => {
  return {
    thisArray: state.data,
    restoinfo: state.currentRest,
    isShowMain: state.isShowMain,
    loadSpinner: state.loadSpinner
     
  }
};
            
    
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actions.displayRestaurants())
    }
};

        
        
export default connect(mapStateToProps, mapDispatchToProps)(Main);