import React, { createContext } from "react";
const ParentA=({text})=>{
    return(
        <div>
            <h1>ParentA</h1>
            <ChildA/>
        </div>
    );
}
const ChildA=({text})=>{
    return(
        <div>
            <h1>childA</h1>
            <GrandchildA/>
        </div>
    );
}
const GrandchildA=({text})=>{
    return(
        <div>
            <h1>GrandchildA</h1>
            <TextContext.Consumer>{
                (text) =><p>{text}</p>
}
            </TextContext.Consumer>
        </div>
    );
}
const TextContext = createContext('');

const App =()=>{
    var text="Hello Programmer";
    return(
        <div>
            
<TextContext.Provider value="Hello Programmer" >
<ParentA/>
</TextContext.Provider>
            
        </div>
    );
}
export default App;
