import '../style/App.css';
import Grid from '@mui/material/Grid';
import { Navbar } from './Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Grid container spacing={2}>
				<Grid item xs={8}>
					xs=8
				</Grid>
				<Grid item xs={4}>
					xs=4
				</Grid>
				<Grid item xs={4}>
					xs=4
				</Grid>
				<Grid item xs={8}>
					xs=8
				</Grid>
			</Grid>
		</>
	);
}

export default App;
