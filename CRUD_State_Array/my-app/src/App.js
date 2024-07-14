// TH1: use React.memo

// import "./App.css";
// import Context from "./Context";
// import { useState } from "react";
// function App() {
//   const [count, setState] = useState(1);
//   var handleClick = () => {
//     setState(count + 1);
//   };
//   return (
//     <div className="App">
//       <Context />
//       <button onClick={handleClick}>Click </button>
//       <p>{count}</p>
//     </div>
//   );
// }

// export default App;

/// TH2:  USECALLBACK

import "./App.css";
import Context from "./Context";
import { useCallback, useState } from "react";
function App() {
  const [count, setState] = useState(1);
  var handleClick = useCallback(() => {
    setState((prev) => {
      return prev + 1;
    });
  }, []);
  return (
    <div className="App">
      <Context onIncrease={handleClick} />
      <p>{count}</p>
    </div>
  );
}

export default App;
