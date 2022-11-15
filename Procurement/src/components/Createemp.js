import React, { Component } from "react";
import axios from "axios";

export default class Createemp extends Component{

  constructor(props){
    super(props);
    this.state={
      vreg:"",
      vname:"",
      vowner:"",
      vprice:"",
      vdescription:"",
      
     
    }
  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit=(e)=>{
    e.preventDefault();

    const{vreg,vname,vowner,vprice,vdescription}=this.state;

    const data={
      vreg:vreg,
      vname:vname,
      vowner:vowner,
      vprice:vprice,
      vdescription:vdescription,
    }

    console.log(data)

    axios.post("http://localhost:8000/employee/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            vreg:"",
            vname:"",
            vowner:"",
            vprice:"",
            vdescription:"",
          
          }

        )
        alert("successfuly added");
      }
    })

  
  }
    render(){
        return(
          <div>
            
  
            <div className="container">
              <h1 className="empreg">Vehicle registration</h1>
              <form className="frm">
                <form class="row g-3" >
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Vehicle register number</label>
    <input type="email" class="form-control" id="inputEmail4" name="vreg" value={this.state.vreg} onChange={this.handleInputChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Vehicle name</label>
    <input type="password" class="form-control" id="inputPassword4" name="vname" value={this.state.vname} onChange={this.handleInputChange}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Vehicle owner</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="1234 Main St" name="vowner" value={this.state.vowner} onChange={this.handleInputChange}/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Vehicle price</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="vprice" value={this.state.vprice} onChange={this.handleInputChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Vehicle description</label>
    <input type="text" class="form-control" id="inputCity" name="vdescription" value={this.state.vdescription} onChange={this.handleInputChange}/>
  </div>
  
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>Add vehicle</button>

  </div>
</form>
</form>
            </div>
            </div>
        )
    }
}