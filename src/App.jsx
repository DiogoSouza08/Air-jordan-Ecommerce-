import './App.css'
import CardsMandF from './components/CardsMadnF';
import ClothingOptions from './components/ClothingOptions';
import CustomSection from './components/customSection';
import Header from './components/header';
import ProductCard from './components/productCard';
import SeeAllBtn from './components/seeAllBtn';
import EmailInput from './components/emailInput';
import Rodape from './components/footer';
import FadeInSection from './components/FadeinSection';


//fonts
import "@fontsource/poppins"; 
import "@fontsource/antonio";
import BuyBtn from './components/buyBtn';

function App() {

  return (
    <div>
      <div className='bg-zinc-700 w-full sm:flex sm:justify-center'>
      <div className="App max-w-screen-2xl ">
        <div className='flex items-center justify-center py-2.5 sm:hidden border-gray-400 border-b'>
          <img src="jordan-logo.webp" alt="" className='w-12' />
        </div>
        <header className="App-header z-40">

          <main className='flex-col bg-white sm:pb-0 pb-0 flex'>
            <Header />
            <FadeInSection>
            <div className='px-3.5 lg:px-24 justify-between flex-col-reverse sm:flex-row flex items-center'>
              <div className='pb-20 sm:pb-0 h-auto items-start space-y-6 text-center sm:text-start flex-col justify-center flex'>
                <span className='title font-bold text-red-700 text-8xl lg:text-9xl'>THE LAST<br /> DANCE</span>
                <p className='text-zinc-700 text-xl'>Descubra a história por trás da <br />coleção Air Jordan</p>
              </div>
              <img src="https://cdn.afew-store.com/assets/38/388297/1200/air-jordan-1-retro-high-og-sp-university-red-black-summit-white-dv1748-601-footwear%20%3E%20sneaker-packshots-120.jpg" alt="" className='w-full md:w-45 sm:w-96 ' />
            </div>
            </FadeInSection>

          </main>

        </header>

  
        <FadeInSection>
        <CardsMandF />
        </FadeInSection>

        <section>
          <CustomSection
            backgroundImage='https://r0.wallpaperflare.com/path/943/148/889/nike-air-jordan-1-shoes-near-chain-link-fence-58988ba4051d129601fa1d5ce3d7e4a0.jpg?timestamp=1714751753643'
            title="O que você está procurando?"
            subtitle="Temos qualquer tipo de Air Jordan que levanta sua alma!"
          >
            <BuyBtn/>
          </CustomSection>
        </section>

        <FadeInSection>
        <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
          <div className='gap-2 flex flex-col'>
            <span className='title uppercase sm:text-8xl text-6xl font-extrabold '>Roupas</span>
            <p>Descubra a essência jordan</p>
          </div>
          <ClothingOptions />
        </section>
        </FadeInSection>

        <section>
          <CustomSection
            backgroundImage='https://images.unsplash.com/photo-1565261189855-95dac103929d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title="Você nas alturas"
            subtitle="O melhor da Jordan, estilo moderno, utilidade de rua!"
          >
            <BuyBtn/>
          </CustomSection>
        </section>

        <FadeInSection>
        <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
          <span className='title uppercase sm:text-8xl text-6xl font-black '>Coleção Air Jordan</span>
          <ProductCard limit={4} />
          <SeeAllBtn />
        </section >
        </FadeInSection>
        
        <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
          <span className='title uppercase text-3xl sm:text-4xl font-black '>Inscreva-se para receber notícias e promoções</span>
          <EmailInput />
        </section>
        
        <footer>
          <Rodape />
          <div className='border-gray-400 py-3 text-gray-400 justify-center items-center text-sm border-b flex text-center'>
            <div className='flex items-center justify-center flex-col gap-4'>
              <img src="./jordan-logo.webp" alt="" className='w-10 sm:hidden' />
              <span>Todos os direitos reservados por Diogo Souza©</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  )
}

export default App
