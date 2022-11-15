import React, { Component } from "react";
import axios from 'axios';

export default class Employeedetails extends Component{

  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/employee/get").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.extistingEmp
      });
      console.log(this.state.posts)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(posts,searchKey){
  const result=posts.filter((post)=>
  post.email.includes(searchKey)
  
  
  )
  this.setState({posts:result})
}
handleSearchArea= (e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/employee/get").then(res=>{
    if(res.data.success){

    this.filterData(res.data.extistingEmp,searchKey)
     }
  });
}

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/employee/delete/${id}`).then((res)=>{
    alert("deleted succcess");
    this.retrievePosts();
  })
}
  render(){
    return(
      <div>
      
     
   
      <div className="container">
        
        
      <div>
        <p className="pEdetais">Transport management</p>
        <nav className="navbar">
  <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
<br/>
        <table className="table">
       
  <thead>

 
    <tr className="tr">
      <th scope="col" className>#</th>
      <th scope="col">Vehicle register number</th>
      <th scope="col">vehicle name</th>
      <th scope="col">vehicle owner</th>
      <th scope="col">vehicle price</th>
      <th scope="col">vehicle description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
    {this.state.posts.map((posts,index)=>(
       <tr>
       <th scope="row">{index+1}</th>
       <td>{posts.vreg}</td>
       <td>
          <a href={`/employee/${posts._id}`}>
          {posts.vname}</a>
       
       </td>
       <td >{posts.vowner}</td>
       <td>{posts.vprice}</td>
       <td>{posts.vdescription}</td>
       
       
       <td>
        <a className="btn btn-warning" href={`/edit/${posts._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>
        &nbsp;
        <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)} >
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </a>

       </td>
     </tr>

    ))}
   
   
  </tbody>

</table>
<button type="button" className="btn btn-success"><a href="/create" style={{textDecoration:'none',color:'white'}}>Add vehicle</a></button>

       

      </div>
      </div>
      </div>
     
    )
  }
}