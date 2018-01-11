import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Container, Header, Title, Content, Footer,
        List,
        ListItem,
        FooterTab, 
        Button, 
        Left, 
        Right, 
        Body, Icon, Text, View} from 'native-base'
import Details from './Details';

export class RestaurantInfos extends Component{

    showName(){
        
    }
    render() 
    {
        return(
            
            <ListItem onPress={this.props.getData}><Text>{this.props.restaurant.name} {(this.props.restaurant.distance/1000 ).toFixed(1)} {"km away"}</Text><Left /><Right><Icon name='arrow-forward' /></Right></ListItem>

   
        )
    }
};           
RestaurantInfos.protoTypes = {
restaurant: PropTypes.object.isRequired
};


const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        getData: () => dispatch(actions.restaurantInfo(ownProps.restaurant)),
    }}

export default connect(null,mapDispatchToProps)(RestaurantInfos);
           