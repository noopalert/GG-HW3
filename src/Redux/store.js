import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token-reduc";

export default configureStore({
    reducer:{
       token: tokenReducer
    }
})