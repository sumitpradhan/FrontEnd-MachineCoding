import { useState } from "react";
import Folder from "./component/Folder";
import explorer from "./data/data";
import "./styles.css";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData,setExplorerData] =useState(explorer)

  const {insertNode} =useTraverseTree();

  const handleInsert =(folderId,isFolder,item)=>{
    const finalTree=insertNode(explorerData,folderId,isFolder,item);
    setExplorerData(finalTree);
  }

  return (
    <div className="App">
      <Folder handleInsert={handleInsert} explorerData={explorer}/>
    </div>
  );
}

export default App;
