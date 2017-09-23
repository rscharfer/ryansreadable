## My assumptions

#1 An action is an event that modifies the store (state) of the app
#2 actions are dispatched to reducers, rewrite a part of the store
#2 Actions should be as lightweight as possible, use references if possible
#3 If the actions 'create' an object, the values for the properties of that object are propeties on the action
#4 you should use the amount of information needed by the api to update the database as the amount of information contained in the action