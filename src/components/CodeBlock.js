import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Toggle from "./Toggle";

// const codeSimple = `
// fun main(args : Array<String>) {
//   println("Hello, world!")
// }

// `;
const CodeBlock = (props) => {
  const [lineNumbers, setLineNumbers] = useState(true);
  return (
    <div>
      <h2>Code Block</h2>
      <Toggle
        toggle={{
          checked: lineNumbers,
          onChange: (e) => setLineNumbers(!lineNumbers),
        }}
      />

      <CopyBlock
        language={props.language}
        text={props.codeSimple}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default CodeBlock;
