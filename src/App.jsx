import React from 'react';
import TodoApp from './TodoApp';

function App() {
  

  return (
    <>
    <div style={{ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center", 
          height: "100vh" 
        }}>
     <TodoApp/>
     </div>
    </>
  )
}

export default App
