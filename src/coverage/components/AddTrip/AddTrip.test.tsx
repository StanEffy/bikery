import { render, screen } from "@testing-library/react"
import React from "react"
import {ReduxTestProvider} from "../../testHelper"
import AddTrip from "../../../components/AddTrip/AddTrip"

jest.mock("nanoid", () => {
    return { nanoid: () => "1234" }
})
describe("check add station button functionality", () => {

    test("Both fields for departure and arrival exists",  () => {
       render(
            <ReduxTestProvider>
                <AddTrip />
            </ReduxTestProvider>

        )

        const departureSelect = screen.getByLabelText("Departure station")
        expect(departureSelect).toBeInTheDocument()

        const arrivalSelect = screen.getByLabelText("Arrival station")
        expect(arrivalSelect).toBeInTheDocument()

    })

    test("if nothing selected, button exists and is disabled",  () => {
        render(
            <ReduxTestProvider>
                <AddTrip />
            </ReduxTestProvider>
        )
        const buttonAddTrip = screen.getByText("Add trip")
        expect(buttonAddTrip).toBeInTheDocument()
        expect(buttonAddTrip).toHaveAttribute("disabled")
    })

})

export {}