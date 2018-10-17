import React from 'react';
import { Link } from 'react-router';

class List extends React.Component {
    render() {
        return (
            <div>
                <p>Please choose a page to open from the list below.</p>
                <ul>
                    <li><Link to="./Header.js">Header</Link></li>
                </ul>
            </div>
        );
    }
}

export default List;