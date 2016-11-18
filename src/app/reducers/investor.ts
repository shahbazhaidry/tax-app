import { ActionTypes } from './../actions/investor';
import * as investor from '../actions/investor';
import { Investor } from '../models/investor';

export interface State {
    id:     string,
    age:    number,
    salary: number,
    email:  string,
    tax:    number
}

const initialState: State = {
    id: null,
    age: null,
    salary: null,
    email: null,
    tax: null
}

export function reducer(state = initialState, action: investor.Actions): State {
    switch (action.type) {
        case investor.ActionTypes.CALCULATE_TAX: {
            // Change this with logic
            return initialState;            
        }
        case investor.ActionTypes.TAX_CALCULATION_COMPLETE: {
            // Change this with logic            
            return initialState;
        }
        default: {
            return initialState;
        }
    }
}  