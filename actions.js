export const RESTAURANTS = "RESTAURANTS";
export const RESINFO = "RESINFO";
export const BACKCLICKED = "BACKCLICKED";
export const SPINNER_LOAD = "SPINNER_LOAD";
import axios from "axios";

export function displayRestaurants(){
    
	return (dispatch) => {
		dispatch(loadSpinner(true));
		navigator.geolocation.getCurrentPosition(
			(position) => {
				// closure to fetchRestaurants
				dispatch(fetchRestaurants(position.coords.latitude, position.coords.longitude));
			},
            
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 } );

	};
}


export function fetchRestaurants(lat, long){
	return (dispatch) => {
		const mykey = "HzcIWrVy_128AFfFY-Noc5KzDth4-n30hRYSnrMX4d78mDepLATFvC28CRuaUaZ17jPhTJG9GuzsoVN0owAKtxp425tTnYSuhEkwO_IAk1qmaxFnTEe9459Kx99FWnYx";
		// concatination my string to use my geolocation longitude and latitude
		let url = "https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=" + 
            lat + "&longitude=" + long;
		
		axios.get(url, {
			headers: {
				"Authorization": "Bearer " + mykey
			}
		}).then((response) => {
			
			if (response.status != 200) {
				throw Error(response.statusText);
			}
			return response;
		}).then((response) => {
			dispatch(restaurantList(response.data));
			// run spinner when clicked until value is false
			dispatch(loadSpinner(false));

		});
	};
    
    
    
}

export function backToMain(){
	return{
		type: BACKCLICKED,
		backBTN: Boolean,
		isShowMain: Boolean
	};
}
                         
export function restaurantInfo(dataInfo){
    
    
	return {
		type: RESINFO,
		currentRest: dataInfo,
		isShowMain: Boolean
	};
}


export function restaurantList(data) {
  
	return {
		type: RESTAURANTS,
		data: data,
		isShowMain: Boolean

       
	};
}
export function loadSpinner(state) {
	return {
		type: SPINNER_LOAD,
		state: state
	};
}

