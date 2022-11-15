import React, { Component } from "react";
import axios from "axios";
import 'C:/SLIIT My Academic Files/2nd YEAR/2nd Semester (Y2 S2)/Modules/ITP (IT2080)/ITP Project/MERN Video Series/Part 1/New Prj File/itp pro2/Procurement/src/components/css/Pagenavigater.css';

export default class Pagenavigater extends Component{

    render(){
        return(
            <body className="Pgnavi">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>


<center>

<div class="Pgnavbox">

<button type = "submit" class = "Procu-button"><a href="/Log"><font size = "5">Procurement</font></a></button>
<button type = "submit" class = "Sup-button"><a href="/Supplreg"><font size = "5">Supplier</font></a></button>

</div>
</center>

</body>
        )
}


}
