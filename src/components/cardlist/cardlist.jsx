import './cardlist.scss'

function Cardlist(){
    return(
        <div className="container">
            <section className="card-list" id="card-list">
                <div className="card">
                    <div className="card-contents">
                        <div className="card-icon">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>
                        <div className="card-section">
                            <h1>Title</h1>
                            <h2>15th August 2025</h2>
                            <p>Independence Day Event </p>
                            <p>@ Mathurapur BSS High School </p>
                            <button className="card-action"> Read More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )   
}

export default Cardlist;