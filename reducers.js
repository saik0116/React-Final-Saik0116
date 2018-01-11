import { ACTION_TYPE, RESTAURANTS, RESINFO, BACKCLICKED, SPINNER_LOAD } from "./actions";

export default function reducers(state, action) {
    let modifiedState = Object.assign({}, state);

    
    switch(action.type) {
    case RESTAURANTS:
        console.log(action.data.businesses);
        modifiedState.data = action.data.businesses;
        modifiedState.isShowMain = true;

        break;
    case RESINFO:
            modifiedState.isShowMain = false;
        modifiedState.currentRest = action.currentRest;
//            console.log(action.currentRest.name);

        break;
    case BACKCLICKED:
            modifiedState.isShowMain = true;
            console.log("BackClicked");
            console.log(modifiedState.isShowMain);
        break;
    case SPINNER_LOAD:
            modifiedState.loadSpinner = action.state;
        break;
    default:
        return state;
    }
    return modifiedState;
}