import React, { useState } from 'react'
import NavbarContext from './NavbarContext'

const NavbarState = (props) => {
    const [changeColor, setChangeColor] = useState(false)


 return (
     <NavbarContext.Provider value={{
        changeColor: changeColor,
        setChangeColor: setChangeColor
     }
     }>
        {props.children}
     </NavbarContext.Provider>
 )
}

export default NavbarState