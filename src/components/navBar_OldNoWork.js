import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";

class NavBar extends Component {
  //consumer context
  //static contextType = ThemeContext;

  render() {
    return (
      
      <AuthContext.Consumer> {(authContext)=>(
        <ThemeContext.Consumer>
          {(themeContext) => {
            const { isAuthenticated } = this.authContext;
            const { isLightTheme, light, dark } = themeContext;
            const theme = isLightTheme ? light : dark;
            return (
              <nav style={{ background: theme.ul, color: theme.syntax }}>
                <h1>Context App</h1>
                <div>
                  {isAuthenticated? "Logged in " : "logged Out" }
                 </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            )
          }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
  }
}

export default NavBar;
