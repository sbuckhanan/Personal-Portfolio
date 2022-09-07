import '../style/App.css';
import { Navbar } from './Nabar';
import { About } from './About';
import { Skills } from './Skills';
import { Footer } from './Footer';

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
