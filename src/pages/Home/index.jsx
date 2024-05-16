import { Button } from "primereact/button";
import Header from "../../components/Header";
import { styled } from "styled-components"
import { useState } from "react";
import { Dialog } from "primereact/dialog"
import { InputText } from "primereact/inputtext";

const HomeContainer = styled.section``

const Home = () => {
    
    const [visibleDialog,setVisibleDialog] = useState()

    return ( 
        <HomeContainer>
            <Header />
            <div className="p-6">
                <h1 className="flex justify-content-between align-items-center">
                    Home
                    <Button 
                        label="Nova tarefa"
                        icon="pi pi-plus"
                        onClick={() => setVisibleDialog(true)}
                    />
                </h1>
            </div>
        <Dialog
            visible = {visibleDialog}
            onHide = {() => setVisibleDialog(false)}
        >
            <form className="flex flex-column gap-3">
                <h3>Criar Tarefa</h3>
                <InputText
                    placeholder="Titulo"
                />
                <InputText
                    placeholder="Descreva a tarefa"
                />
                <Button
                    type="submit"
                    label="Criar"
                />
            </form>
        </Dialog>
        </HomeContainer>
     );
}
 
export default Home;