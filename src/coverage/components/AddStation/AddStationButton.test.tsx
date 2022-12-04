import { render, screen } from "@testing-library/react"
import React from "react"
import AddStationButton from "../../../components/AddStation/AddStationButton"

describe("check add station button functionality", () => {
    const mockCb = jest.fn()

    test("button is on the page and it is clickable",  () => {
        render(<AddStationButton handleClick={mockCb} pin={false}/>
        )

        const button = screen.getByRole("button")
        expect(button).toHaveTextContent("Add Station")

        mockCb()

        expect(mockCb.mock.calls.length).toBe(1)
    })

    test("button is on the page, it is still clickable and it's text is different when pin is set to true",  () => {
        render(<AddStationButton handleClick={mockCb} pin={true}/>
        )
        const button = screen.getByRole("button")
        expect(button).toHaveTextContent("Don't add")
    })
})

export {}