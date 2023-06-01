import Card from './components/Card';
import blueblur from './assets/blueblur.jpg';
import redgrad from './assets/redgrad.jpg';
import yellowpink from './assets/yellowpink.jpg';

function App() {
	return (
		<main className='m-4 grid gap-12 font-sans grid-cols-2 xl:grid-col-2'>
			<Card img={blueblur} title={'Check out my blog'} />
			<Card img={redgrad} title={'Explore CSS color news'} />
			<Card img={yellowpink} title={'A bright future for devs'} />
		</main>
	);
}

export default App;
