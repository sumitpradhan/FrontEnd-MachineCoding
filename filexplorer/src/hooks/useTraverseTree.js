
const useTraverseTree=()=>{
    const insertNode =(dataTree,folderId,isFolder,item)=>{
        if(dataTree.id==folderId && dataTree.isFolder)
        {
            if(dataTree?.items.length)
            {                
                dataTree.items.unshift({
                    id: new Date(),
                    isFolder,
                    name:item,
                    items:[]
                })
            }
            else
            {
                dataTree.items.push({
                    id: new Date(),
                    isFolder,
                    name:item,
                    items:[]
                })
            }

            return dataTree;
        }
        else
        {
            let latestNode = [];
            latestNode = dataTree?.items?.map((data)=>{
                return insertNode(data, folderId,isFolder,item);
            })
            return { ...dataTree, items: latestNode };
        }
        
    }

    return {insertNode};
}

export default useTraverseTree;