import { useEffect } from "react";
import axios from "axios";
function App(){
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => console.log(response.data));

},[]);
return(
    <div>
        Different ways to fetch the Data
    </div>
);
}
export default App;