import { Container } from "./CarouselStyle";

function Carrousel({text, color, background}){

    return(

        <Container background={background}>    

            <p className="textMiddle" style={{color: color}}>{text}</p>
   
        </Container>

    );

}

export default Carrousel;