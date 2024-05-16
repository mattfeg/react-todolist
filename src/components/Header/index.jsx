import { styled } from "styled-components"
import { InputText } from "primereact/inputtext"
import { IconField } from "primereact/iconfield"
import { InputIcon } from "primereact/inputicon"


const HeaderContainer = styled.header``

const Header = () => {
    return ( 
        <HeaderContainer className="flex gap-3 bg-primary px-6 py-3 align-items-center">
            <div className="logo">LOGO</div>
            <IconField className="right">
                <InputIcon className="pi pi-search"/>
                <InputText
                    placeholder="Buscar"
                />
            </IconField>
        </HeaderContainer>
     );
}
 
export default Header;