import { fireEvent, render, screen } from "@testing-library/react"
import Game from "./App"


describe('Menu Game', () => {
    it("game menu should closed", () => {
        render(<Game />)

        const btnPlayGame = screen.getByTestId("play-game")
        const txtMenuGame = screen.getByText('MenuGame')

        fireEvent.click(btnPlayGame)

        expect(txtMenuGame).not.toBeInTheDocument()
    })
})

describe('Board and Square', () => {
    it("'X' and 'O' should appear in square", () => {
        render(<Game />)

        const btnPlayGame = screen.getByTestId("play-game")
        fireEvent.click(btnPlayGame)

        const btnSquare = screen.getAllByTestId("square")
        fireEvent.click(btnSquare[1])
        const txtX = screen.getByText("X")

        expect(txtX).toBeInTheDocument()

        fireEvent.click(btnSquare[2])
        const txtO = screen.getByText("O")

        expect(txtO).toBeInTheDocument()
    })
})