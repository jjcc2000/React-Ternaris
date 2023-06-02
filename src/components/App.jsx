import React from "react";
import Form from "./Form";

const isUserRegistered = false;

function App() {
  return (
    <div className='container'>
      <Form isUserRegistered={isUserRegistered} />
    </div>
  );
}

export default App;
