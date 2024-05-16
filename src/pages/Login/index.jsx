import { useState } from "react"
import { styled } from "styled-components"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { IconField } from "primereact/iconfield"
import { InputIcon } from "primereact/inputicon"

const LoginContainer = styled.section``

const Login = () => {

    const [visiblePassword, setVisiblePassword] = useState(false)

    return ( 
        <LoginContainer className="h-screen flex justify-content-center align-items-center surface-200 p-3 md:p-0">
            <form className="w-12 md:w-4 surface-0 p-3 border-round-sm">
                <h3>Seja bem-vindo</h3>
                <InputText
                    type="email"
                    className="w-full mb-3"
                    placeholder="email@email.com"
                />
                
                <IconField iconPosition="right" className="mb-3">
                    <InputIcon
                        onClick={()=> setVisiblePassword(!visiblePassword)}
                        className={`pi ${visiblePassword ? 'pi-eye' : 'pi-eye-slash'} cursor-pointer`}
                    />
                     
                </IconField>
                <Button
                    type="submit"
                    label="Enviar"
                    className="w-full"
                />
            </form>
        </LoginContainer>
        
     );
}
 
export default Login;