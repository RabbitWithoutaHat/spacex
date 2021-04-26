import React, { useCallback, useEffect, useMemo } from "react"
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
import {
  ILaunchpad,
  IRocket,
  IFiltersState,
  TFilterOption,
} from "../types/types"

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
  const launchpads = useSelector(
    ({ filter }: IFiltersState) => filter.launchpads
  )
  const rockets = useSelector(({ filter }: IFiltersState) => filter.rockets)

  const formattedLaunchpads = useMemo(() => formatOptions(launchpads || []), [
    launchpads,
  ])
  const formattedRockets = useMemo(() => formatOptions(rockets || []), [
    rockets,
  ])

  useEffect(() => {
    dispatch(getRockets)
    dispatch(getLaunchpads)
  }, [dispatch])

  const onChangeLaunchpad = useCallback(
    (option: TFilterOption) => {
      if (option) {
        dispatch(changeLaunchpadFilter(option.value))
      }
    },
    [dispatch]
  )

  const onChangeRocket = useCallback(
    (option: TFilterOption) => {
      if (option) {
        dispatch(changeRocketFilter(option.value))
      }
    },
    [dispatch]
  )

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
