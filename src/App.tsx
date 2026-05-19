import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return createBrowserRouter([
    {
      path:"/",  
      element:<Home/> ,
    },
    {
      path:"/waitlist",
      element:<div>signup for Axis</div>
    },
    {
      path:"/trip",
      element:<div>book your next trip with Axis</div>
    }
  ])

}

export default App
