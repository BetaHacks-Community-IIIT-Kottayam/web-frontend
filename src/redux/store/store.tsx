import {configureStore,combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {PERSIST,persistReducer,persistStore, } from 'redux-persist';

const persistConfig={
    key:'auth',
    storage
}

const rootReducer=combineReducers({
    auth:persistReducer(persistConfig,authReducer),
})

export const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[PERSIST]
        }
    })
});

export const persistor=persistStore(store);

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;