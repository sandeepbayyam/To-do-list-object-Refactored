import React from 'react';
import './style.css';

class Task extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div> <li className ={this.props.task.status==='success'?'success':'pending'}> {this.props.task.title}
    &nbsp;&nbsp;&nbsp;&nbsp;
      <button className={this.props.task.status==='success'?'undo':'done'} onClick={()=>{
        this.props.updateSuccess(this.props.ind);
      }}>Done</button>
      &nbsp;

      <button  className={this.props.task.status==='pending'?'undo':'done'} onClick={()=>{
        this.props.updatePending(this.props.ind);
      }}>Undo</button>
      &nbsp;

      <button onClick={()=>{
        this.props.deleteTask(this.props.ind);
      }}>Delete</button>
      <hr/>
     </li>
     </div>);
  }
}
export default Task;
