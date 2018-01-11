import React, {Component} from 'react';
import Main from "./Main";
import { Container, Header, Title, Content, Footer,
        List,
        ListItem,
        FooterTab, 
        Button, 
        Left, 
        Right, 
        Body, Icon, Text, View, Image} from 'native-base'
import * as actions from "../actions"
import {connect} from "react-redux";
import RestaurantInfos from "./RestaurantInfo";
                   
export class Details extends Component {

    
         
    
    render() {  

        
        return (
            <Container>
            <Header>
          <Left>
            <Button transparent onPress={this.props.backbtns}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
            <Text style={{color: 'powderblue'}}>Restaurant Name: {this.props.myInfo.name}</Text>
            <Text>Phone: {this.props.myInfo.phone}</Text>
            <Text>{(this.props.myInfo.distance/1000*1).toFixed(1)}km away</Text>
            <Text>Price: {this.props.myInfo.price}</Text>

            </Container>

        );
                  


}

//    } else { return( <Main /> );}
//}
    
    
};

const mapStateToProps = (state) => {
  return {
    myInfo: state.currentRest,
    isShowMain: state.isShowMain
     
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actions.displayRestaurants()),
        backbtns: () => dispatch(actions.backToMain())
    }
}
   
        
//export default connect(Details);

export default connect(mapStateToProps, mapDispatchToProps)(Details);



