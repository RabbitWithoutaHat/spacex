import React from "react"
import { LaunchesList } from "./components/LaunchesList"
import { Filters } from "./components/Filters"
import styled from "styled-components"
import { Pagination } from "./components/Pagination"

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  font-family: "Comfortaa", cursive;
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
