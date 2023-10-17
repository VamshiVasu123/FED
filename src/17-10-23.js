import React, {useState} from 'react';
const MyComponent = async()=>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    try{
        const response=await fetch("https://api.example.com/data");
        const json=await response.json();
        setData(json);
    }catch(error){
        setError(error);
    }
    return(
        <div>
            {error ?<p>An error occured: {error.message}</p>:null}
            {data ?<p>Data: {data}</p>:null}
        </div>
    );
}
export default MyComponent;