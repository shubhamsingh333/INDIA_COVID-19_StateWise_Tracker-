import React, { useState, useEffect } from "react";
import "./stateWise.css";

const StateWise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.statewise);
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <div className="mb-5 text-center">
                        {" "}
                        <span className="font-weight-bold"> INDIA</span> COVID-19 Dashboard{" "}
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th> State </th>

                                    <th> Confirmed </th>

                                    <th> recovered </th>

                                    <th> Deaths </th>

                                    <th> Active </th>

                                    <th> Updated </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map((curElem, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <th> {curElem.state}      </th>
                                                <td> {curElem.confiremed} </td>
                                                <td> {curElem.recovered}  </td>
                                                <td> {curElem.deaths}     </td>
                                                <td> {curElem.active}    </td>
                                                <td> {curElem.lastupdatedtime}     </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StateWise;
