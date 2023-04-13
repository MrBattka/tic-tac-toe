import React from 'react'

const MenuGame = ({ setIsOpenMenu }) => {

    return (
        <div className='wrapper_menu'>
            <h2>MenuGame</h2>
            <div className='wrapper_btn_control'>
                <div className='wrapper_btn'><button>Play with a BOT</button></div>
                <div className='wrapper_btn'><button onClick={() => setIsOpenMenu(false)}>Play with a PERSON</button></div>
            </div>

        </div>
    )
}

export default MenuGame