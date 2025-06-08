import React from "react"

const Report=()=>{

  React.useEffect(()=>{
    getFolderFiles()
  },[])

  const getFolderFiles= async()=>{
    let files = await window.myFile.getFolderFiles()
    console.log("filesfiles", files)
  }

  return(
    <div>
      1111
    </div>
  )
}

export default Report