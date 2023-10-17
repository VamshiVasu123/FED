import React from 'react';
function App() {
  
  return (
    <div>
      <h1>Pick a color</h1>
      <input type="color" name="colour" id="colour" onChange={picker}  />
    </div>
    
  );
}
function picker() {
  const colour = document.getElementById("colour");
  document.body.style.backgroundColor = colour.value;

}
  
export default App;