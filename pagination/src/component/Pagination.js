import React from 'react'

const Pagination = ({curPage,setPage,totalPage}) => {
  console.log(totalPage);
  return (
    <div className='paginationContainer'>
      {curPage>1?<span onClick={()=>setPage(curPage-1)}>Prev</span>:<></>}
        {[...Array(parseInt(totalPage))]?.map((_,i)=>{
            return <span className={curPage===i+1?"selected":""} onClick={()=>setPage(i+1)}>{i+1}</span>
        })}
      {curPage<totalPage-1?<span  onClick={()=>setPage(curPage+1)} >Next</span>:<></>}
    </div>
  )
}

export default Pagination