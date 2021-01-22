import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLaunches } from "../redux/actions"
import { IState } from "../types/types"
import { LaunchItem } from "./LaunchItem"

export const LaunchesList = () => {
  const dispatch = useDispatch()
  const data = useSelector((state: IState) => state.data)

  useEffect(() => {
    dispatch(getLaunches)
  }, [dispatch])

  return (
    <>
      {data && data.length ? (
        data.map(({ name, date_utc, details, links }) => (
          <LaunchItem
            name={name}
            date_utc={date_utc}
            details={details}
            links={links}
            key={name}
          />
        ))
      ) : (
        <div>No items</div>
      )}
    </>
  )
}
