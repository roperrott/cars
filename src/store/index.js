import { configureStore } from "@reduxjs/toolkit";
import { carListsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carListsSlice";
import { carCreationReducer, changeName, changeCost } from "./slices/carCreationSlice";

const store = configureStore({
    reducer: {
        cars: carListsReducer,
        form: carCreationReducer
    }
});

export {store, changeName, changeCost, addCar, removeCar, changeSearchTerm };