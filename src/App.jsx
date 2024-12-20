import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Body from './components/Body'
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"

const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [{
    path: "/inbox",
    element: <Inbox />
  },
  {
    path: "/mail/:id",
    element: <Mail />
  },
  ]

}])

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router} />
    </div>

  )
}

export default App
