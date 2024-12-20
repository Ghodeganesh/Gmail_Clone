import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Body from './components/Body'
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"
import Sendmail from "./components/Sendmail"

const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
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
      <div className=" absolute bottom-0 right-20 w-[30%] mr-10">
        <Sendmail />
      </div>
    </div>

  )
}

export default App
