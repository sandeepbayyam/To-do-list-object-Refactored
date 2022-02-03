import React from "react";
import "./style.css";
import Task from './Task';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      tasks:[
           {
             title:"Buy new phone",
             status:"pending"
           },
           {
            title:"DTH recharge",
            status:"success"
          },
          {
            title:"Join Gym",
            status:"pending"
          },
          {
            title:"Join online classes",
            status:"success"
          },
          {
            title:"Book movie tickets",
            status:"pending"
          },

      ]
    }
  }
  addTask = ()=>{
    var newtask = {title:'',status:'pending'};
    newtask.title = document.getElementById('d1').value;
    this.setState({tasks:[...this.state.tasks,newtask]})
  }
  deleteTask=(index)=>{
    var temp = [...this.state.tasks];
    temp.splice(index,1);
    this.setState({tasks:[...temp]});
    
  }
  updateSuccess=(index)=>{
   var temp = [...this.state.tasks];
   temp[index].status = 'success';
   this.setState({tasks:[...temp]});
  }
  updatePending=(index)=>{
    var temp = [...this.state.tasks];
    temp[index].status = 'pending';
    this.setState({tasks:[...temp]});
   }
  render(){
    return(
      <div>
        <h1>To-Do List (objects):</h1>
        <input type ="text" id="d1"/>
        &nbsp;
        <button onClick={this.addTask}>Add Task</button>
        <hr/>
        {
          this.state.tasks.map((task,ind)=>{
             return (<Task
               task = {task}
               ind={ind}
               deleteTask={this.deleteTask}
               addTask={this.addTask}
               updateSuccess={this.updateSuccess}
               updatePending={this.updatePending}
             ></Task>);
          }
          )
        }
      </div>
    );
  }
}
export default App;
