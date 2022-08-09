import './app-fiter.css';


const AppFilter=()=>{
    return(
        <div className="btn-group">
            <button type="button" 
            className="btn btn-light"
            >
                Все сотдудники
            </button>
            <button type="button" 
            className="btn btn-outline-light"
            >
                Повышение
            </button>
            <button type="button" 
            className="btn btn-outline-light"
            >
                З/п больше 1000$
            </button>
        </div>
    )
}
export default AppFilter;