import { Outlet } from "react-router-dom"


const App =()=> {

  return (
    <>
      <div className="h-auto w-auto">
       <Outlet/>
      </div>
      
    </>
  )
}

export default App
