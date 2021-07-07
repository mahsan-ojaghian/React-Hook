import React, { useState } from "react";
function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <h1>Fill Inputs</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log(name.firstName, name.lastName);
        }}
      >
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <br></br>
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default HookCounterThree;
