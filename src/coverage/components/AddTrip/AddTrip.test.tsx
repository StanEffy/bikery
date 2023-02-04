import {fireEvent, render, screen, within} from "@testing-library/react"
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


    // test("Two more fields appear when stations are selected",  () => {
    //     render(
    //         <ReduxTestProvider>
    //             <AddTrip />
    //         </ReduxTestProvider>
    //     )
    //     const autocompleteDeparture = screen.getByLabelText("autocompleteArrivalstation")
    //     const inputDeparture = within(autocompleteDeparture).getByRole("combobox")
    //
    //     autocompleteDeparture.click()
    //     autocompleteDeparture.focus()
    //
    //     expect(autocompleteDeparture).toBeInTheDocument()
    //
    //     fireEvent.change(inputDeparture, { target: { value: "Hanasaari" } })
    //
    //     expect(screen.getByText(/Hanasaari/)).toBeInTheDocument()
    //
    //     fireEvent.keyDown(autocompleteDeparture, { key: "ArrowDown" })
    //     fireEvent.keyDown(autocompleteDeparture, { key: "Enter" })
    //
    //     expect(inputDeparture).toHaveValue("Hanasaari")
    //
    //     const autocompleteArrival = screen.getByLabelText("autocompleteDeparturestation")
    //     const inputArrival = within(autocompleteArrival).getByRole("combobox")
    //     autocompleteArrival.focus()
    //
    //     fireEvent.change(inputArrival, { target: { value: "Hanasaari" } })
    //     fireEvent.keyDown(autocompleteArrival, { key: "ArrowDown" })
    //     fireEvent.keyDown(autocompleteArrival, { key: "Enter" })
    //
    //     expect(inputArrival).toHaveValue("Hanasaari")
    //
    //     const distanceField = screen.getByLabelText("distance meters (100+)")
    //     expect(distanceField).toBeInTheDocument()
    //
    //     const durationField = screen.getByLabelText("duration sec (100+)")
    //     expect(durationField).toBeInTheDocument()
    // })
})

export {}