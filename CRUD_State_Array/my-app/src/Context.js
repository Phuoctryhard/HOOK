// TH1 : Sử dụng useCallback

// import React from "react";
// import { memo } from "react";
// const Context = memo(function Context() {
//   console.log("re - render ");
//   return <div>Context</div>;
// });
// export default Context;

// <button>Click </button>;

import React from "react";
import { memo } from "react";
const Context = memo(function Context({ onIncrease }) {
  console.log("re - render ");

  return (
    <div>
      <button onClick={onIncrease}>Click</button>
    </div>
  );
});
export default Context;
