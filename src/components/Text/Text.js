import { Container } from "./TextStyle";

function Text({text, colorText, backgroundText}){

    return(

        <Container colorT={colorText} backgroundT={backgroundText}>

            <p className="title">Texto Interativo</p>
            <p className="text">{text}</p>
            
        </Container>

    )


}

export default Text;