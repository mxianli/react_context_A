import React, {Component} from 'react';
import {ThemeContext } from '../contexts/themeContext';
class BookList extends Component {
      //consumer context
      static contextType = ThemeContext;
    render() { 
        const { isLightTheme, light, dark }  = this.context;
        const theme = isLightTheme? light:dark;

        return (
            <div className='book-list'   >
                <ul  >
                    <li style={{background: theme.ul, color: theme.syntax}}>Book 1</li>
                    <li style={{background: theme.ul, color: theme.syntax}}>Book 2</li>
                    <li style={{background: theme.ul, color: theme.syntax}}>Book 3</li>
                </ul>
            </div>
          );
    }
}
 
export default BookList;