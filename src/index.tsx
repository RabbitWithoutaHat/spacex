import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from "./redux/reducer"
import App from "./App"
import { api } from "./api/api"

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument({ api }))
)

const rootElement = document.getElementById("root")
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
