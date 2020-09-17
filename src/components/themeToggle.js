import React,{ Component} from 'react';
import {ThemeContext} from '../contexts/themeContext';

class ThemeToggle extends Component {

    static contextType = ThemeContext;
    render() { 
        const {toggleTheme} = this.context;
        return ( 
            <button onClick = {toggleTheme} >Click to change theme</button>
         );
    }
}
 
export default ThemeToggle;