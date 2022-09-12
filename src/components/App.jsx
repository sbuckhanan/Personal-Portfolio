import '../style/App.css';
import { Navbar } from './Nabar';
import { About } from './About';
import { Skills } from './Skills';
import { Footer } from './Footer';
import { Projects } from './Projects';
import { Contact } from './Contact';

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
