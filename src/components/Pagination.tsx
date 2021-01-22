import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import Paging from "react-paginating"
import { changePagination } from "../redux/actions"
import { IState } from "../types/types"

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  max-width: 500px;
  width: 100%;
  justify-content: flex-end;
`

const StyledButton = styled.button`
  padding: 0.5rem 0.75rem;
  color: #0275d8;
  background-color: #fff;
  border: 1px solid #ddd;
  touch-action: manipulation;
  &:focus {
    outline: none;
  }
`

const ActiveButton = styled(StyledButton)`
  background-color: #005baa;
  color: #fff;
`

export const Pagination = () => {
  const dispatch = useDispatch()
  const total = useSelector((state: IState) => state.totalDocs)
  const currentPage = useSelector(
    (state: IState) => state.params?.options?.page
  )

  const onPageChange = useCallback(
    (page?: number) => {
      dispatch(changePagination(page || 1))
    },
    [dispatch]
  )

  return (
    <Wrapper>
      <Paging
        className="bg-red"
        total={total}
        pageCount={5}
        currentPage={currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          getPageItemProps,
        }) => (
          <div>
            {hasPreviousPage && (
              <StyledButton
                {...getPageItemProps({
                  pageValue: previousPage,
                  onPageChange,
                  total,
                })}
              >
                {"<"}
              </StyledButton>
            )}

            {pages.map((page) => {
              return (
                <>
                  {currentPage === page ? (
                    <ActiveButton
                      {...getPageItemProps({
                        pageValue: page,
                        onPageChange,
                        total,
                      })}
                      key={page}
                    >
                      {page}
                    </ActiveButton>
                  ) : (
                    <StyledButton
                      {...getPageItemProps({
                        pageValue: page,
                        onPageChange,
                        total,
                      })}
                      key={page}
                    >
                      {page}
                    </StyledButton>
                  )}
                </>
              )
            })}

            {hasNextPage && (
              <StyledButton
                {...getPageItemProps({
                  pageValue: nextPage,
                  onPageChange,
                  total,
                })}
              >
                {">"}
              </StyledButton>
            )}
          </div>
        )}
      </Paging>
    </Wrapper>
  )
}
