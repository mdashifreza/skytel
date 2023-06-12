import React, { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";
const App = () => {
  const options = [
    { value: "Australia", label: "Australia" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Canada", label: "Canada" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Denmark", label: "Denmark" },
    { value: "France", label: "France" },
    { value: "Finland", label: "Finland" },
    { value: "Germany", label: "Germany" },
  ];
  const preselectedValues = ["Australia", "Bermuda"];
  // const readonly = false;
  const [readonly,setReadOnly] = useState(false)
  const handleClick = ()=>{
    if(readonly === true){
      setReadOnly(false)
    }
    else{
      setReadOnly(true)
    }
  }
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h1 className="text-3xl font-semibold bg-teal-300 p-2 rounded-md mb-5">MultiSelect Dropdown</h1>
      <h1 className="p-2 font-bold text-xsls">Select readOnly props Value(true/false):{""}<button className="bg-teal-400 text-white rounded p-0.5 font-semibold"
      onClick={handleClick}
      >change</button></h1>
      <MultiSelectDropdown
        options={options}
        value={preselectedValues}
        readonly={readonly}
      />
    </div>
  );
};

export default App;
