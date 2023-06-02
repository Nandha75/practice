import React from "react";
import '../App.css';


const HistoryTable = ({ history }) => {
    return (
            <center>
                <div>
                    <h2>History</h2>
                    <table>
                        <th>Input 1</th>
                        <th>Input 2</th>
                        <th>Opration</th>
                        <th>Output</th>
                        <tbody>
                            {history.map((item) => (
                                <tr>
                                    <td>{item.input1}</td>
                                    <td>{item.input2}</td>
                                    <td>{item.operation}</td>
                                    <td>{item.result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </center>
    );
};

export default HistoryTable;