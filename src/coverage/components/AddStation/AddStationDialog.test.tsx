import { render, screen } from "@testing-library/react"
import React from "react"
import AddStationDialog from "../../../components/AddStation/AddStationDialog"
import {ReduxTestProvider} from "../../testHelper"

describe("check add station button functionality", () => {
    const mockCb = jest.fn()

    test("Dialog is not exist when open set to false",  () => {
        const { queryByTestId } = render(
            <ReduxTestProvider>
                <AddStationDialog handleClose={mockCb} open={false} x={1} y={1}/>
            </ReduxTestProvider>

        )

        expect(queryByTestId(/add-station-dialog__test-id/i)).toBeNull()

    })

    test("both buttons - delete and send - exist when dialog is opened",  () => {
        render(
            <ReduxTestProvider>
                <AddStationDialog handleClose={mockCb} open={true} x={1} y={1}/>
            </ReduxTestProvider>
        )
        const buttonDelete = screen.getByLabelText("delete")
        expect(buttonDelete).toBeInTheDocument()

        const buttonSend = screen.getByText("Send station")
        expect(buttonSend).toBeInTheDocument()
    })
})

export {}