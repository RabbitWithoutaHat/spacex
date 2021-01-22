import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Dropdown from "react-dropdown"
import styled from "styled-components"
import "react-dropdown/style.css"
import {
  changeLaunchpadFilter,
  changeRocketFilter,
  getLaunchpads,
  getRockets,
} from "../redux/actions"
import { ILaunchpad, IRocket, IState, TFilterOption } from "../types/types"

const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`
const Label = styled.div`
  margin-bottom: 5px;
`
const FilterContainer = styled.div`
  flex-basis: 45%;
`

const StyledDropdown = styled(Dropdown)`
  font-size: 14px;
`

const formatOptions = (options: IRocket[] | ILaunchpad[]) => {
  return options && options.length
    ? [
        { value: "", label: "All" },
        ...options.map(({ name, id }) => ({
          value: id,
          label: name,
        })),
      ]
    : []
}

export const Filters = () => {
  const dispatch = useDispatch()
  const launchpads = useSelector((state: IState) => state.launchpads)
  const rockets = useSelector((state: IState) => state.rockets)

  const formattedLaunchpads = formatOptions(launchpads || [])
  const formattedRockets = formatOptions(rockets || [])

  useEffect(() => {
    dispatch(getRockets)
    dispatch(getLaunchpads)
  }, [])

  const onChangeLaunchpad = (option: TFilterOption) => {
    if (option) {
      dispatch(changeLaunchpadFilter(option.value))
    }
  }
  const onChangeRocket = (option: TFilterOption) => {
    if (option) {
      dispatch(changeRocketFilter(option.value))
    }
  }

  return (
    <FiltersWrapper>
      <FilterContainer>
        <Label>Launchpad</Label>
        <StyledDropdown
          options={formattedLaunchpads}
          placeholder="All"
          data-name={"launchpad"}
          onChange={onChangeLaunchpad}
        />
      </FilterContainer>
      <FilterContainer>
        <Label>Rocket</Label>
        <StyledDropdown
          options={formattedRockets}
          placeholder="All"
          data-name={"rocket"}
          onChange={onChangeRocket}
        />
      </FilterContainer>
    </FiltersWrapper>
  )
}
