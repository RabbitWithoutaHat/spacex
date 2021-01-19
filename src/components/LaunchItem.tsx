import React from "react"
import styled from "styled-components"
import { ILaunch } from "../types/types"

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: nowrap;
  width: 500px;
  height: 100px;
  justify-content: space-between;
  padding: 7px 0;
`

const MissionEmblem = styled.div`
  min-width: 100px;
  max-width: 100px;
  margin-right: 20px;
`
const Image = styled.img`
  max-width: 100%;
  max-height: 100%; ;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
const Discription = styled.div`
  font-size: 12px;
`

export const LaunchItem = (data: ILaunch) => {
  const { links, date_utc, details, name } = data
  const date = new Date(date_utc)
  const formattedDate = date
    ? `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    : ""

  return (
    <Wrapper>
      <MissionEmblem>
        <Image src={links.patch.small} />
      </MissionEmblem>
      <Info>
        <Header>
          <div>{name}</div>
          <div>{formattedDate}</div>
        </Header>
        <Discription>
          {details && details.slice(0, 280)}
          {details && details.length && "..."}
        </Discription>
      </Info>
    </Wrapper>
  )
}
