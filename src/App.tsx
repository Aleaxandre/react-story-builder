import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Progress } from './Progress';

type AppPropTypes = {};

type AppState = {
    percentage: number;
    date?: Date;
};

export class App extends React.Component<AppPropTypes, AppState> {
    constructor(props: AppPropTypes) {
        super(props);
        this.state = { percentage: 50, date: new Date() };
    }

    render(): JSX.Element {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Progress percentage={this.state.percentage} />
                    <input
                        type="number"
                        min="0"
                        max="100"
                        value={this.state.percentage}
                        onChange={(e): void => this.handleChange(e.target.value)}
                    />
                    <span>{this.props && this.state.date && this.state.date.toDateString()}</span>
                </header>
            </div>
        );
    }
    handleChange(value: string): void {
        this.setState({ percentage: +value });
    }
}

export default App;
