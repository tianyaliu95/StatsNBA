import React from 'react';
import logo from '../assets/nba-logoman-word-white.svg';

export class TopNavBar extends React.Component {
    render() {
        return (
            <header className="App-header">	
                <a href="https://www.nba.com">
                	<img src={logo} className="App-logo" alt="logo" />
                </a>
                <span className="text">Player Stats Center</span>
            </header>
        );
    }
}