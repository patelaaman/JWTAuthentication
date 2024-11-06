import Footer from "./Component/Footer"
import Header from "./Component/Header"
import  {Outlet} from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Header></Header>
        <hr size="4px"></hr>
        <Outlet></Outlet>
        <hr size="4px"></hr>
        <Footer></Footer>
        </>
    )
}
export default Layout