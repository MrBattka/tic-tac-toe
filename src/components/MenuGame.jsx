import React from 'react'

const MenuGame = ({ setIsOpenMenu }) => {
    const closedMenu = () => {
        setIsOpenMenu(false)
    }
    return (
        <div className='wrapper_menu'>
            <h2>MenuGame</h2>
            <div className='wrapper_btn_control'>
                <div className='wrapper_btn'><button data-testid='play-game' onClick={closedMenu}>Play Game</button></div>
            </div>
        </div>
    )
}

export default MenuGame