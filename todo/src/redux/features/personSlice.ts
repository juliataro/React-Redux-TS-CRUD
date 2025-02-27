// https://www.youtube.com/watch?v=EqbwHO6Vgbg

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interface of persons
export interface Person {
  id: number;
  name: string;
}

// Interface for list of persons
interface PersonState {
  persons: Person[];
}

// Initial state of persons
const initialState: PersonState = {
  persons: [],
};

// We create  our slice with the object
export const PersonSlice = createSlice({
  name: "person", //the name of the slice
  initialState,
  reducers: {
    // reducer is the object that contains our actions,
    // action - is the function that can mutate our state
    // PayloadAction has a type of parameter that we can pass through this action
    // With this type when we dispatching action addPerson
    addPerson: (state, action: PayloadAction<{ name: string }>) => {
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
      });
    },
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;
