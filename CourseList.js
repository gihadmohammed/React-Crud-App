import React,{ Component } from 'react';


class CourseList extends Component{
  state ={
    isEdit :false
  }
  renderCourseItem=()=>{
    return(
    <li>
    <span>{this.props.details.name}</span>
    <button onClick={()=>{this.toggle()}}>EditCourse</button>
    <button onClick={()=>this.props.deleteCourses(this.props.index)}>Delete</button>
    
   </li>);
  }
  //toggle
  toggle=()=>{
    let {isEdit} = this.state;
    this.setState({
      isEdit :!isEdit
    })
  }
  updateFormItem=(e)=>{
   e.preventDefault();
   this.props.editCourse(this.props.index,this.input.value);
   this.toggle();
  }
  renderUpdateForm=()=>{
    return(
      <form onSubmit={this.updateFormItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}></input>
        <button>Update course</button>
      </form>
    );

  }
  render(){
    let {isEdit}=this.state
  return (
<React.Fragment>

   {isEdit ? this.renderUpdateForm(): this.renderCourseItem()}
</React.Fragment>
    
    
  );
}}

export default CourseList;