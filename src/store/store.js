import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { categoriesReducer } from './slices/categories/categoriesSlice';
import { priceCntrlReducer } from './slices/priceCntrl/priceCntrlSlice';
import { productsReducer } from './slices/products/productsSlice';
import {usersReducer} from './slices/users/usersSlice'
import {searchReducer} from './slices/search/searchSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const rootReducer = combineReducers({  
        products:productsReducer,
        users:usersReducer,
        categories:categoriesReducer,
        priceCntrl:priceCntrlReducer,
        search:searchReducer
    })

    const persistConfig = {
        key: 'fantasticShop.com',
        storage,
      }
      
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore ({
    
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export default store