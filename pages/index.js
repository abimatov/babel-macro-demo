import codegen from 'babel-plugin-codegen';


export default function Home() {
  const CodegenComponent = codegen.require('../components/codegenDemo');
  return <>
    <CodegenComponent />
  </>;
}
