import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';

function App() {
	return (
		<>
			<SoftBackdrop />
			<Navbar />
			<Home />
			<Footer />
		</>
	);
}
export default App;