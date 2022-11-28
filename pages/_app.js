//! Check the README.md !

import '../styles/globals.css'

import Head from 'next/head'

// Initialize & configure Redux store for the whole app
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Configure Redux store data persistance with local storage
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import friends from '../components/redux/reducers/friendsReducer.js'
import counter from '../components/redux/reducers/counterReducer.js'

const reducers = combineReducers({ friends, counter })

// Configure local storage, define a unique name in key for each new app
const persistConfig = { key: 'Next React Demo', storage }

const store = configureStore({
	reducer: persistReducer(persistConfig, reducers),
	middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store)

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Head>
					<title>Next React DEMO</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}
