/* eslint no-console: 'off' */

const { createStore, combineReducers } = require('redux');

const pets = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PET':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

const goodPeople = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GOOD_PEOPLE':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

const badPeople = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BAD_PEOPLE':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

const reducer = combineReducers({
    pets,
    people: combineReducers({
        good: goodPeople,
        bad: badPeople
    })
});

const store = createStore(reducer);

// register an event handler to redux store "change" event
store.subscribe(() => {
    console.log('store state:', store.getState());
});

console.log(store.getState());

store.dispatch({
    type: 'ADD_PET',
    payload: { name: 'Garfield', type: 'cat'}
});

store.dispatch({
    type: 'ADD_GOOD_PEOPLE',
    payload: { name: 'President Garfield', role: 'assassinated by Charles J. Guiteau'}
});