/* 

The Three Principles of Redux 
_____________________________

1.  The state of your whole application is stored in one single location called the store.
2.  The only way to change the state is to emit or dispatch actions. 
3.  To specify how the state is transformed, we write functions called reducers. 

*/

/* 

Redux Jargons and explanations

1. Actions - Describes what happened. These are plain javascript objects that indicates the type of action to be performed. 
   The type property is typically defined as string constants. Additionally, these action objects may contain additional info as payload.

2. Reducers - Functions that specify how the app's state changes in response to actions sent to the store. Reducers take the current state, 
   an action, and returns a new copy of the state object.
   
3. Store - Holds the state for the entire application in one location. The store takes in the reducer function as a parameter. 

4. Action Creators - Functions that hold the action object for ease of access and organization. 

5. Middleware - Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. Use the middleware
   for logging, crash reporting, performing asynchronous tasks, etc.

6. Synchronous Actions - As soon as an action is dispatched, the next line of code will only execute when current line is done. Blocking code.

7. Async Actions - Actions can be executed regardless of completion of preceeding actions. Non blocking code.
*/
