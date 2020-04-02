import React from 'react';
import { Line } from 'rc-progress';
import './Progress.css';

type ProgressPropTypes = {
    percentage: number;
};
export class Progress extends React.Component<ProgressPropTypes> {
    render(): JSX.Element {
        return (
            <div className="progress-container">
                <Line percent={this.props.percentage} strokeWidth={3} strokeColor="#D3D3D3" />
                {/* <Circle percent={10} strokeWidth={4} strokeColor="#D3D3D3" /> */}
            </div>
        );
    }
}
