import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";
 
export const NavBar = () => {
    return (
        <AuthContext.Consumer>{(authContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                
                return (
                    <nav style={{ background: theme.ul, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <div onClick={toggleAuth}>
                            {isAuthenticated ? "Logged in" : "Logged out"}
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
    )
}