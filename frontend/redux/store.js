import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import {
   persistReducer,
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER 
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
   key: "root", 
   storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) => {
      getDefaultMiddleware({
         serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
         }
      })
   }
})

const persistor = persistStore(store);

export {store, persistor};