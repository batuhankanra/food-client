import { Outlet } from "react-router"
import Header from "./header"
import Footer from "./footer"
import Banner from "../components/banner"
import { useAppDispatch, useAppSelector } from "../stores/hook"
import Modal from "../modal/modal"
import { Toaster } from "sonner"
import { useEffect } from "react"
import { GetItem } from "../stores/features/api"



const MainLayout = () => {
  const {modal}=useAppSelector(state=>state.modal)
  const dispatch=useAppDispatch()

  useEffect(()=>{
    dispatch(GetItem())
  },[])
  return (
    <div className="w-full h-full flex flex-col  justify-between">
      <Toaster position="top-center" />
      {modal && <Modal />}
      <Header />
      
        <Banner />
      <div className="my-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
