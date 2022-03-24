import React, { useState, useEffect } from 'react';
import './App.css';
import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";
import Card from "./components/Card";


function App() {
    const [totalConsumption, setTotalConsumption] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [footprint, setFootprint] = useState(0);

    useEffect(async () => {
        const readings = await getReadings();
        const totalPowerList = sortByTime(groupByDay(readings)).slice(-30);
        const totalConsumption = getTotalConsumption(totalPowerList);
        const totalCost = totalConsumption * 0.138;
        const footprint = totalConsumption * 0.0002532;

        setTotalConsumption(totalConsumption.toFixed(0));
        setTotalCost(totalCost.toFixed(0));
        setFootprint(footprint.toFixed(4));

        renderChart(totalPowerList);
    }, []);



    function getTotalConsumption(list) {
        return list.reduce((total, { value }) => {
            return total + value;
        }, 0);
    };

    return (
        <div >
            <div className="background shadow-2 flex overflow-hidden">
                <aside className="p3 menuWidth overflow-auto">
                    <p className="h2 greyBlue">⚡️ 1.4kW</p>
                    <p className="darkgray mb2">Power draw</p>
                    <p className="h2 greyBlue">☀️️ 5.8kW</p>
                    <p className="darkgray mb2">Solar power production</p>
                    <p className="h2 greyBlue">🔌️ 4.4kW</p>
                    <p className="darkgray mb2">Fed into grid</p>
                    <section className="h5 darkgray mb2">
                        <h4 className="h4 mb1">Your devices:</h4>
                        <div className="shadow-2 roundedMore bg-super-light-grey mb1">
                            <p className="darkgray pl2 pt1 pb1">Air conditioner</p>
                            <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
                                0.3093kW
                            </p>
                        </div>
                        <div className="shadow-2 roundedMore bg-super-light-grey mb1">
                            <p className="darkgray pl2 pt1 pb1">Wi-Fi router</p>
                            <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
                                0.0033kW
                            </p>
                        </div>
                        <div className="shadow-2 roundedMore bg-super-light-grey mb1">
                            <p className="darkgray pl2 pt1 pb1">Humidifer</p>
                            <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
                                0.0518kW
                            </p>
                        </div>
                        <div className="shadow-2 roundedMore bg-super-light-grey mb1">
                            <p className="darkgray pl2 pt1 pb1">Smart TV</p>
                            <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
                                0.1276kW
                            </p>
                        </div>
                        <div className="shadow-2 roundedMore bg-super-light-grey mb1">
                            <p className="darkgray pl2 pt1 pb1">Diffuser</p>
                            <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
                                0.0078kW
                            </p>
                        </div>
                        <div className="shadow-2 roundedMore bg-super-light-grey mb1">
                            <p className="darkgray pl2 pt1 pb1">Refrigerator</p>
                            <p className="h5 darkgray bold pl2 pb1 pt1 bg-very-light-grey">
                                0.0923kW
                            </p>
                        </div>
                    </section>
                </aside>
                <article className="bg-very-light-grey p3 flex-auto overflow-auto">
                    <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
                    <section className="mb3">
                        <button
                            className="
              h5
              inline-block
              shadow-2
              pl2
              pr2
              pt1
              pb1
              roundedMore
              border-grey
              bg-blue
              white
              bold
            "
                        >
                            Last 30 days
                        </button>
                    </section>
                    <section className="chartHeight mb3">
                        <canvas id="usageChart"></canvas>
                    </section>
                    <Card totalConsumption={totalConsumption} totalCost={totalCost} footprint={footprint} />
                </article>
            </div>
        </div>
    );
}

export default App;
