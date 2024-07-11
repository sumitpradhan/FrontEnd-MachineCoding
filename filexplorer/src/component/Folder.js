import React, { useState } from 'react'
import { FaRegFolder,FaFile  } from "react-icons/fa";

const Folder = ({explorerData,handleInsert}) => {
  const [expand,setExpand]=useState(false);
  const [showInput,setShowInput]=useState({
    visible:false,
    isFolder:false

  })

  const handleNewFolder =(e,isFolder)=>{
    e.stopPropagation();//Stops Event bubbling
    setExpand(true);
    setShowInput({
        visible:true,
        isFolder
    })
  } 
 
  const onAddFolder  =(e)=>{
    if(e.keyCode===13 && e.target.value)
    {
        //folderid, isFolder,name , new_id
        
        handleInsert(explorerData.id,showInput.isFolder, e.target.value);
        setShowInput({...showInput, visible: false})
    }
  }

  if(explorerData.isFolder)
  {
    return (
        <div style={{ marginTop: 5 }}>
            <div onClick={()=>setExpand(!expand)} className='folder'>
                <span><FaRegFolder/> {explorerData?.name}</span>
                <div>
                    <button onClick={(e)=>handleNewFolder(e,true)}>Add Folder +</button>
                    <button  onClick={(e)=>handleNewFolder(e,false)}>Add File +</button>
                </div>
            </div>
            
            <div  style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                {showInput.visible && 
                    
                    <div className='inputContainer'>
                        <span>{showInput.isFolder?<FaRegFolder/>:<FaFile/>}</span>
                        <input 
                        type="text"
                        className="inputContainer__input"
                            autoFocus
                            onBlur={()=> setShowInput({
                                ...showInput, visible: false
                            })}
                            onKeyDown={onAddFolder}
                            />
                    </div>                   

                }
                {explorerData?.items?.map(exp=>(
                    <Folder handleInsert={handleInsert} explorerData={exp}/>
                ))}
            </div>
        </div>
      )
  }
  else{
    return (
        <div className='file'>
             <span ><FaFile/> {explorerData?.name}</span>
        </div>
       
    )
  }
  
}

export default Folder