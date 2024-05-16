import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../../pages/Home"
import Login from "../../pages/Login"

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/dashboard" element={}/> */}
                <Route path="*" element={
                <>
                    <h1>Pagina não encontrada</h1>
                    <a href="/">Voltar</a>
                </>
            }/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;