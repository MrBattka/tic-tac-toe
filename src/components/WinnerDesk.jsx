import React, { useCallback } from "react"

const WinnerDesk = ({ winner, setWinnerEditMode, setCurrentMove, setIsOpenMenu }) => {

    const handleOnClickOnPlay = useCallback(() => {
        setWinnerEditMode(false)
        setCurrentMove(0)
    }, [setWinnerEditMode, setCurrentMove])
    
    const handleOnClickOnMenu = useCallback(() => {
        setWinnerEditMode(false)
        setIsOpenMenu(true)
        setCurrentMove(0)
    }, [setWinnerEditMode, setIsOpenMenu, setCurrentMove])

    return (
        <div className='winner_box_wrapper'>
            <p>Winner Player:
                <span>{winner}</span>
                <span>{!winner && 'The Draw'}</span>
            </p>
            <button data-testid="btnPlayAgain" onClick={handleOnClickOnPlay}>Play Again</button>
            <button data-testid="btnBackToMenu" onClick={handleOnClickOnMenu}>Back to Menu</button>
        </div>
    )
}

export default WinnerDesk