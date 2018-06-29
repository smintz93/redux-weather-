import { FETCH_WEATHER } from '../actions/index';

// need an array bc need multiple cities at once to be displayed. 

export default function(state = [], action){
	switch (action.type){
	case FETCH_WEATHER:
	// concat makes a new array
	// cant mutate state
		// return state.concat([action.payload.data]);
		return [ action.payload.data, ...state ]; // [ city, city, city]
	}
	return state;
}