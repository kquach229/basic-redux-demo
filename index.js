// Bring in the redux library
const redux = require("redux");

// Bring in the create store function within the redux library.
const createStore = require("redux").createStore;

// Bring in the combineReducers library within the redux library.
const combineReducers = require("redux").combineReducers;

// Bring in redux logger package.
const reduxLogger = require("redux-logger");

// Extract the createLogger function from the redux logger and store in a variable.
const logger = reduxLogger.createLogger();

// Bring in the appleMiddleware function from the redux package.
const applyMiddleware = redux.applyMiddleware;

// Create an initial state for the car count.
const initialCarState = {
  carCount: 0,
};

// Create an initial state for the boat count.
const initialBoatState = {
  boatCount: 0,
};

// Create action constants
const BUY_CAR = "BUY_CAR";
const BUY_BOAT = "BUY_BOAT";

// Additionally, you can create action creators for each action. This is optional but recommended.
function buyCar() {
  return {
    type: BUY_CAR,
    info: "Buy a car",
  };
}

function buyBoat() {
  return {
    type: BUY_BOAT,
    info: "Buy a boat",
  };
}

// Create reducers for each action.
const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        carCount: state.carCount + 1,
      };

    default:
      return state;
  }
};

const boatReducer = (state = initialBoatState, action) => {
  switch (action.type) {
    case BUY_BOAT:
      return {
        ...state,
        boatCount: state.boatCount + 1,
      };

    default:
      return state;
  }
};

// Create a root reducer which will take multiple reducers and combine them into one.
const rootReducer = combineReducers({
  car: carReducer,
  boat: boatReducer,
});

// Use the createStore function that we imported at the top to create a store. Note, the store can
// take a reducer and multiple middlewares as possible parameters
const store = createStore(rootReducer, applyMiddleware(logger));

// Console log the initial state
console.log("intial state", store.getState());

// Subscribe to the store. Usually, we would call the store.getState method, however, in this
// case, we are already using the redux logger so we can omit it
const unsubscribe = store.subscribe(() => {});

// Dispatch the actions. You will find that each time the dispatches occur, the counts of the car and boat changes
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());

store.dispatch(buyBoat());
store.dispatch(buyBoat());
store.dispatch(buyBoat());
store.dispatch(buyBoat());
store.dispatch(buyBoat());
store.dispatch(buyBoat());

// Unsubscribe from the store
unsubscribe();
