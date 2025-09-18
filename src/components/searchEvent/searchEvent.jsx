import './searchEvent.scss'
function SearchEvent() {

    
    return (
        <div>
            <section><div className="container">
                <h1 style={{ textAlign: "center" }}><u>Events</u></h1>
                <select name="select" id="select" onChange={filterTable}>
                    <option value="future">Upcomming Events</option>
                    <option value="past">Past Events</option>
                </select>
                <div className="dropdown"></div>
            </div>
            </section>  


            <table border="n" id="listing" style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>Events</th>
                        <th>Date</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>15th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>16th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>17th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>18th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>19th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>20th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>21st August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>22nd August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>23rd August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>24th August</td>
                        <td>Mathurapur</td>
                    </tr>
                    <tr>
                        <th scope="row">Independence Day</th>
                        <td>25th August</td>
                        <td>Mathurapur</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default SearchEvent;