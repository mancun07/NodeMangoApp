import React, { useReducer, createContext } from 'react'
export const NavbarContext = createContext();
import NavbarReducer from './NavbarReducer';


const initialState = {
   transparentColor: false 
}

const NavbarContextProvider = (props) => {
    
      const [state, dispatch] = useReducer(NavbarReducer, initialState)

      const setTransparentColor = () => {
            dispatch({type: 'SET_TRANSPARENT'})
      }


   return (
      <NavbarContext.Provider value={{
         transparentColor: state.transparentColor,
         setTransparentColor
      }
     }>
        {props.children}
     </NavbarContext.Provider>
 )
}

export default NavbarContextProvider