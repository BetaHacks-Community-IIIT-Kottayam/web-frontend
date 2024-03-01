import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import blogReducer from "../features/blog/blogSlice";
import userReducer from "../features/user/userSlice";
import contentReducer from "../features/system/contentSlice";
import storage from "redux-persist/lib/storage";
import { authApi } from "../features/auth/authAPI";
import { contentApi } from "../features/system/contentAPI";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import searchReducer from "../features/blog/searchSlice";

const persistConfig = {
  key: "auth",
  storage,
};
const persistConfigblog = {
  key: "blog",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  blog: persistReducer(persistConfigblog, blogReducer),
  user: userReducer,
  content: contentReducer,
  search: searchReducer,
  [authApi.reducerPath]: authApi.reducer,
  [contentApi.reducerPath]: contentApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(contentApi.middleware, authApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
