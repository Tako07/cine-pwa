import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';
import { config } from './lib/firebase'
import { App } from './App'

firebase.initializeApp(config)


ReactDOM.render(<App />, document.getElementById('app'))