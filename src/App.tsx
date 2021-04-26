import React from "react"
import styled from "styled-components"
import { LaunchesList } from "./components/LaunchesList"
import { Filters } from "./components/Filters"
import { Pagination } from "./components/Pagination"
import "./index.css"

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-family: "Comfortaa", cursive;
  padding: 0 15px 15px;
`

function App() {
  return (
    <AppWrapper>
      <h2>Launches</h2>
      <Filters />
      <LaunchesList />
      <Pagination />
    </AppWrapper>
  )
}

export default App
