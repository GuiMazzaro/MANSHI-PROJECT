import { Container } from "./ImagesWrapStyle";
import Links from "./Links";

function ImagesWrap(){

    var links = [
        
        {
            link: 'https://www.receitasedicasdochef.com.br/wp-content/uploads/2015/03/15-Alimentos-que-dao-Energia-2-600x700.jpg',
        },

        {
            link: 'https://blog.cowboystore.com.br/wp-content/uploads/2018/09/Destaque-Comidas-t%C3%ADpicas-de-cada-regi%C3%A3o-para-o-seu-almo%C3%A7o-de-domingo.jpeg',
        },

        {
            link: 'https://gourmetjr.com.br/wp-content/uploads/2018/03/JPEG-image-B6230B799E47-1_1170x600_acf_cropped_490x292_acf_cropped.jpeg',
        },

        {
            link: 'https://www.maxmilhas.com.br/blog/wp-content/uploads/2019/11/comida-mineira.jpg',
        },

        {
            link: 'https://meubistro.com/blog/wp-content/uploads/2019/06/comida-brasileira.jpg',
        },

        {
            link: 'https://www.saboravida.com.br/wp-content/uploads/2019/08/5-comidas-tipicas-que-abrasileiramos.jpg',
        },

]

    return(

        <Container>

            <div className="wrap">

            {   
            links.map(function(element){

                return <Links 
                    
                    link={element.link}
            
                />
    
                })
            }


            </div>

        </Container>
    )

}

export default ImagesWrap;