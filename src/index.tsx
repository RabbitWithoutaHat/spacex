import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { rootReducer } from "./redux/rootReducer"
import App from "./App"
import { api } from "./api/api"

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ api }))
)

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
