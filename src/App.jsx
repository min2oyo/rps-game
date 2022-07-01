import "./App.css";
import Box from "./components/Box";

function App() {
	return (
		<>
			<div className="container">
				<div className="main-image center">
					<Box title="You" />
					<Box title="Computer" />
				</div>
				<div className="main-button center">
					<button>가위</button>
					<button>바위</button>
					<button>보</button>
				</div>
			</div>
		</>
	);
}

export default App;
