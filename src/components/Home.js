import React from "react";
import CodeBlock from "./CodeBlock";

function Home() {
  const codeSimple = `
  // install node
  brew install node

  // install create-react-app
  npm install -g create-react-app

  //create app
  create-react-app helloreactapp
  cd helloreactapp

  //start react app
  npm start

`;
  const language = "bash";
  return (
    <div>
      <h2>Home page</h2>
      <CodeBlock language={language} codeSimple={codeSimple} />
    </div>
  );
}

export default Home;
