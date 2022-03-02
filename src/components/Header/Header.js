import {Container} from "./HeaderStyle.js";
import Links from "./Links";

function Header({backgroundMenu, colorText}){

    var links = [
        
        {
            link: 'home',
            nome: 'Home'
        },

        {
            link: 'nossaHistoria',
            nome: 'Nossa História'
        },

        {
            link: 'rede',
            nome: 'Rede'
        },

        {
            link: 'trabalhe',
            nome: 'Trabalhe conosco'
        },

        {
            link: 'menu',
            nome: 'Menu'
        },

        {
            link: 'icon',
            nome: 'Icone'
        },

]

    return(

        <Container style={{backgroundColor: backgroundMenu}} color={colorText}>
            
            <div className="header">
                
            {
                links.map(function(element){

                 return <Links 
                  
                        link={element.link}
                        nome={element.nome}
          
                />
  
                })
            }

            </div>

        </Container>

    );

}

export default Header;