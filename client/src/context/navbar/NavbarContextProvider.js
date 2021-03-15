import React, { useReducer, createContext } from 'react'
export const NavbarContext = createContext();
import NavbarReducer from './NavbarReducer';


const initialState = {
   transparentColor: false,
   sidenavIsOpened: false
}

const NavbarContextProvider = (props) => {
    
      const [state, dispatch] = useReducer(NavbarReducer, initialState)

      const setTransparentColor = () => {
            dispatch({type: 'SET_TRANSPARENT'})
      }

      const toggleMenu = () => {
            dispatch({type: 'TOGGLE_MENU'})
      }


   return (
      <NavbarContext.Provider value={{
         transparentColor: state.transparentColor,
         sidenavIsOpened: state.sidenavIsOpened,
         setTransparentColor,
         toggleMenu
      }
     }>
        {props.children}
     </NavbarContext.Provider>
 )
}

export default NavbarContextProvider