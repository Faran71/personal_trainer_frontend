import "./Table.css"

const ThreeTimes = () => {

    return(
        <div>
            <table className="table">
                <tr>
                    <th>Monday</th>
                    <td>Rest</td>
                </tr>
                <tr>
                    <th>Tuesday</th>
                    <td>Chest</td>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <td>Back and Shoulders</td>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <td>Rest</td>
                </tr>
                <tr>
                    <th>Friday</th>
                    <td>Legs</td>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <td>Arms</td>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <td>Rest</td>
                </tr>
            </table>

        </div>
    )

}

export default ThreeTimes;