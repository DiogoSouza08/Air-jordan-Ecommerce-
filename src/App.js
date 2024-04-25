import './App.css';
import Header from './components.js/header';

function App() {
  return (
    <div className="App ">
      <header className="App-header ">
      
      <main className='flex-col lg:h-screen flex items bg-center '>
      <Header/>
        <div className='bg-white px-3.5 lg:px-24 overflow-hidden h-full justify-between flex-col-reverse md:flex-row flex items-start'>

        <div className='h-full bg-red-600 items-center justify-center text-center flex'>
          <h1>THE LAST DANCE</h1>
        </div>
        
        <img src="https://cdn.afew-store.com/assets/38/388297/1200/air-jordan-1-retro-high-og-sp-university-red-black-summit-white-dv1748-601-footwear%20%3E%20sneaker-packshots-120.jpg" alt="" className=' w-full md:w-2/5 lg:' />
        
        </div>
      </main>
      </header>
    </div>
  );
}

export default App;
