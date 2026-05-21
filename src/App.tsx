import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Waitlist from "./pages/Waitlist"

function App() {

  return createBrowserRouter([
    {
      path:"/",  
      element:<Home/> ,
    },
    {
      path:"/waitlist",
      element:<Waitlist/>,
    },
    {
      path:"/trip",
      element:<div>book your next trip with Axis</div>
    }
  ])

}

export default App
