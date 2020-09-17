import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme : true,
        light: {syntax: "#555", ul: "#ddd", bg: "#eees"},
        dark: {syntax: "#ddd", ul: "#333", bg: "#555"}
    }

    toggleTheme = ()=>{
        //console.log ('clicked this.state.isLightTheme=', this.state.isLightTheme);
        this.setState( { isLightTheme : ! this.state.isLightTheme });
    }

    //const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    render() { 
        return ( 
            <ThemeContext.Provider value ={{ ...this.state, toggleTheme: this.toggleTheme }}>
            {this.props.children}
            </ThemeContext.Provider>
         );
    }
}

 
export default ThemeContextProvider;