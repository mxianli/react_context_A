import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated : false
    }
    toggleAuth = ()=>{
        console.log( 'isAuthenticated=' + this.state.isAuthenticated )
        this.setState( { isAuthenticated : ! this.state.isAuthenticated });
    }
     
    //const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    render() { 
        return ( 
            <AuthContext.Provider value ={{ ...this.state , toggleAuth: this.toggleAuth }}>
            {this.props.children}
            </AuthContext.Provider>
         );
    }
}

 
export default AuthContextProvider;