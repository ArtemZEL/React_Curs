
import './app-info.css';
const AppInfo=({increase,employers})=>{
    return(
        <div className="app-info">
            <h1>Учет сотрудников в коммпании N</h1>
            <h1>Общее число осотрудников:{employers} </h1>
            <h2>Премию получают: {increase}</h2>

        </div>
    )
}
export default AppInfo;