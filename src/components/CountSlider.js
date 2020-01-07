import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.value
    }

    onChange = (value) => {
        const cleanValue = Number(value) ? value: this.state.inputValue;
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onCountSliderChange(cleanValue);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} pull={1}>
                        Slide/click below to adjust minimal FGA on the chart. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }, {marginTop: 6}}
                            value={this.state.inputValue}
                            onChange={this.onChange}
                            placeholder="min freq."
                        />
                    </Col>
                </Row> 
            </div>
            
        );
    }
}
