import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Plans from './pages/Plans';
import Community from './pages/Community';
import Generator from './pages/Generator';
import Result from './pages/Result';
import Loading from './pages/Loading';
import MyGenerations from './pages/MyGenerations';

function App() {
	return (
		<>
			<SoftBackdrop />
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/generate' element={<Generator />} />
				<Route path='/community' element={<Community />} />
				<Route path='/plans' element={<Plans />} />
				<Route path='/loading' element={<Loading />} />
				<Route path='/result/:projectId' element={<Result />} />
				<Route path='/my-generations' element={<MyGenerations />} />
				<Route path='/loading' element={<Loading />} />
			</Routes>

			<Footer />
		</>
	);
}
export default App;