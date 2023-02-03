import { render, screen } from "@testing-library/react"
import React from "react"
import ConfirmPinButton from "../../../components/AddStation/ConfirmPinButton"

describe("check add station button functionality", () => {
    const mockCb = jest.fn()

    test("button next is on the page and it is clickable",  () => {
        render(<ConfirmPinButton handleClick={mockCb}/>
        )

        const button = screen.getByRole("button")
        expect(button).toHaveTextContent("Next step")

        mockCb()

        expect(mockCb.mock.calls.length).toBe(1)
    })
})

export {}