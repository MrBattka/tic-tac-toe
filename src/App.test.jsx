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

describe('logic of the game', () => {
    it("player must win", () => {
        render(<Game />)

        const btnPlayGame = screen.getByTestId("play-game")
        fireEvent.click(btnPlayGame)

        const btnSquare = screen.getAllByTestId("square")
        fireEvent.click(btnSquare[0])
        fireEvent.click(btnSquare[1])
        fireEvent.click(btnSquare[4])
        fireEvent.click(btnSquare[5])
        fireEvent.click(btnSquare[8])
        const txtWinner = screen.getByText('Winner Player:')

        expect(txtWinner).toBeInTheDocument()
    })

    it("played draw", () => {
        render(<Game />)

        const btnPlayGame = screen.getByTestId("play-game")
        fireEvent.click(btnPlayGame)

        const btnSquare = screen.getAllByTestId("square")
        fireEvent.click(btnSquare[0])
        fireEvent.click(btnSquare[1])
        fireEvent.click(btnSquare[2])
        fireEvent.click(btnSquare[4])
        fireEvent.click(btnSquare[3])
        fireEvent.click(btnSquare[6])
        fireEvent.click(btnSquare[7])
        fireEvent.click(btnSquare[5])
        fireEvent.click(btnSquare[8])
        const txtWinner = screen.getByText('Winner Player:')

        expect(txtWinner).toBeInTheDocument()
    })
})

describe('Winner Desk', () => {
    it("game must start anew", () => {
        render(<Game />)

        const btnPlayGame = screen.getByTestId("play-game")
        fireEvent.click(btnPlayGame)

        const btnSquare = screen.getAllByTestId("square")
        fireEvent.click(btnSquare[0])
        fireEvent.click(btnSquare[1])
        fireEvent.click(btnSquare[4])
        fireEvent.click(btnSquare[5])
        fireEvent.click(btnSquare[8])
        const txtWinner = screen.getByText('Winner Player:')

        expect(txtWinner).toBeInTheDocument()

        const btnPlayAgain = screen.getByTestId("btnPlayAgain")
        fireEvent.click(btnPlayAgain)

        expect(txtWinner).not.toBeInTheDocument()
    })

    it("should return to the menu game", () => {
        render(<Game />)

        const btnPlayGame = screen.getByTestId("play-game")
        fireEvent.click(btnPlayGame)

        const btnSquare = screen.getAllByTestId("square")
        fireEvent.click(btnSquare[0])
        fireEvent.click(btnSquare[1])
        fireEvent.click(btnSquare[4])
        fireEvent.click(btnSquare[5])
        fireEvent.click(btnSquare[8])
        const txtWinner = screen.getByText('Winner Player:')

        expect(txtWinner).toBeInTheDocument()

        const btnBackToMenu = screen.getByTestId("btnBackToMenu")
        fireEvent.click(btnBackToMenu)
        const txtMenuGame = screen.getByText("MenuGame")

        expect(txtWinner).not.toBeInTheDocument()
        expect(txtMenuGame).toBeInTheDocument()
    })
})