// import {
//   combineReducers,
//   configureStore,
//   getDefaultMiddleware,
// } from "@reduxjs/toolkit";
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "./features/auth/authSlice";

// const persistConfig = {
//   key: "root",
//   // version: 1,
//   storage,
// };

// const reducer = combineReducers({
//   auth: authReducer,
//   // cart: cartReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export default store;


// ========== REDUX WITHOUT PERSIST =============

import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
})

export default store




// import { configureStore } from "@reduxjs/toolkit";
// // import userReducer from "./slices/userSlice";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// import authReducer from "./features/auth/authSlice";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, authReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk]
// })
