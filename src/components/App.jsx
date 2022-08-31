import '../style/App.css';
import { Navbar } from './Nabar';
import { About } from './About';
import { Skills } from './Skills';

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Skills />
		</div>
	);
}

export default App;
