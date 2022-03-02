import Header from '../src/components/Header/Header.js';
import Carrousel from './components/Carrousel/Carrousel.js';
import Text from './components/Text/Text.js';
import ImagesWrap from './components/ImagesWrap/ImagesWrap.js';

import {Container} from './AppStyle';

function App() {
 
  return (

    <Container>

      <Header backgroundMenu={"black"} colorText={"white"}/>

      <Carrousel text={"SEJA BEM VINDO AO RESTAURANTE MANSHI"} color={"yellow"} background={"/images/background_one.jpg"}/>

      <Text 
      text={"O Manshi conquistou o 10º prêmio de Melhor Restaurante Japonês do guia Comer e Beber da Revista Veja Campinas em 2019. Além de típicas receitas japonesas a Casa oferece, também, especialidades diversificadas que permeiam referências tailandesas, chinesas, além de trazer aos pratos, elementos e temperos brasileiros. O espaço, moderno e descontraído, incorpora estilo e design para servir um completo bufê de almoço, festivais completos à noite, pratos à la carte, além de uma temakeria interna, sempre à disposição dos clientes."}
      colorText={"white"}
      backgroundText={"black"}/>

    <ImagesWrap />
      
    </Container>

  );
}

export default App;

