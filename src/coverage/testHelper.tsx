// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Provider } from "react-redux"
import React from "react"
import store from "../store/store"

// eslint-disable-next-line react/prop-types

export const ReduxTestProvider = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}