import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Games from './components/Games';
import AllProviders from './components/Providers';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Carousel />
            <Categories />
            <Games />
            <AllProviders />
            <Footer />
        </div>
    );
}

export default App;
