import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }



    render() {
        const { totalConsumption, totalCost, footprint } = this.props;
        return (
            <section className="charts-bottom">
                <div className="total-cost item shadow-2">
                    <p className="title">Cost</p>
                    <p id="metric-cost" className="metric">{totalCost}</p>
                    <p className="unit">$</p>
                </div>
                <div className="total-consumption item shadow-2">
                    <p className="title">Consumption</p>
                    <p id="metric-consumption" className="metric">{totalConsumption}</p>
                    <p className="unit">kWh</p>
                </div>
                <div className="item shadow-2">
                    <p className="title">Footprint</p>
                    <p id="metric-footprint" className="metric">{footprint}</p>
                    <p className="unit">tonnes</p>
                </div>
            </section>
        )
    }
}
