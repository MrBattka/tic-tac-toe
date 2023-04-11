import React, { useCallback } from "react"

const WinnerDesk = ({ winner, setEditMode, setCurrentMove }) => {

    const handleOnClick = useCallback(() => {
        setEditMode(false)
        setCurrentMove(0)
    }, [setEditMode, setCurrentMove])
    
    return (
        <div className='wiiner_box_wrapper'>
            <p>Winner Player: <span>{winner}</span></p>
            <button onClick={handleOnClick}>Play Again</button>
        </div>
    )
}

export default WinnerDesk