import { Component } from 'react';


import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-fiter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {name: 'Artem Z.', salary: 900,increase:false,id:1},
                {name: 'Matveн G.', salary: 3000,increase:true,id:2},
                {name: 'Alexey Z.', salary: 5000,increase:false,id:3}
            ]
        }
        this.maxId=4;
    }
    deleteItem=(id)=>{
        this.setState(({data})=>{
            //1-способ удаления 
           // const index=data.findIndex(elem=>elem.id===id);
            // const before=data.slice(0,index);
            // const after=data.slice(index+1);
            // const newArr=[...before,...after];
            //2 Способ удаления
            return{
                data: data.filter(item=>item.id !== id)
            }
        })
    }
    render(){
       
        return(
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
     
                </div>
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployersAddForm/>
            </div>
        );
    }
}
export default App;