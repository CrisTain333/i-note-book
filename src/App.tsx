import React from "react";
import CreateNote from "./Components/CreateNote/CreateNote";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <CreateNote />
    </div>
  );
};

export default App;
