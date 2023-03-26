import { createSlice, nanoid } from '@reduxjs/toolkit';

const carListsSlice = createSlice({
    name: 'list',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            //assumpotion_
            //action.payload === { name: 'ab', cost: 140 }
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action){
            //assumpotion_
            //action.payload === the id of the car we want to remove
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carListsSlice.actions;
export const carListsReducer = carListsSlice.reducer;