import React from "react";
function Go (props){

    const affiche= props.moviedata.find(el=> el.id==props.match.params.id   )

    console.log(props)
    return(
        <div>
      <h1>{affiche.title}</h1>
      <h1>{affiche.description}</h1>
      <button  onClick={()=> {props.history.goBack()}    }  > houssem</button>
       
        </div>
    )
    }
    export default Go;