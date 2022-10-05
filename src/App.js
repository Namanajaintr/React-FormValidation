import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewValidForm from "./component/new";
import ValidForm from "./component/ValidForm";

function App() {
  return (
    <div className="ReactFormApp">
      {/* <ValidForm /> */}
      <NewValidForm />
    </div>
  );
}

export default App;
