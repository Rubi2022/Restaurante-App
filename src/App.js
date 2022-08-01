
import Layout from './components/Layout'
import Banner from './components/Banner';
import Description from './components/Description';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import Presentation from './components/Presentation';



function App() { 
  return (
    <div>
      <Layout>
      <Navbar/>
      <Banner/>
      <Description/>
      <Presentation/>
      <Footer/>
      </Layout>
      

    </div>   
  );
}

export default App;
