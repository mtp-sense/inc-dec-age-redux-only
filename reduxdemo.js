//Required for creating the store
const { createStore } = require("redux");

//Initial State
const initialState = {
    age: 15
};
//Reducer
const myReducer = (state = initialState,action)=>{
    const newState = {... state};
    if(action.type ==="ADD"){
        newState.age += action.val;
    }
    if(action.type ==="SUBTRACT"){
        newState.age -= action.val;
    }
return newState;
};
//Store
const store = createStore(myReducer);
//It takes a callback function as an argument.
store.subscribe(()=>{
    console.log("State changed:  "+JSON.stringify(store.getState()));
});

store.dispatch({type:"ADD",val:10});

store.dispatch({type:"SUBTRACT",val:5});
