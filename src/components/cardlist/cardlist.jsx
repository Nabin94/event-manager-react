import './cardlist.scss'
import LoadEvents from './cardlListFilter';

function Cardlist(){
    return(
        <div className="container">
            <section className="card-list" id="card-list">
                <LoadEvents/>
            </section>
        </div>
    )   
}

export default Cardlist;