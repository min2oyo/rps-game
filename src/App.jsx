import "./App.css";
import Box from "./components/Box";

function App() {
	// 객체
	const choice = {
		scissor: {
			name: `Scissor`,
			img: `https://cdn-icons-png.flaticon.com/512/4973/4973989.png`,
		},
		rock: {
			name: `Rock`,
			img: `https://w7.pngwing.com/pngs/577/840/png-transparent-computer-icons-rock-stones-and-rocks-angle-boulder-drawing.png`,
		},
		paper: {
			name: `Paper`,
			img: `https://w7.pngwing.com/pngs/459/816/png-transparent-white-lined-paper-paper-rectangle-article-notes-angle-white-office.png`,
		},
	};

	// 함수
	const play = (choose) => {
		console.log(choose);
	};

	// return
	return (
		<>
			<div className="container">
				<div className="main-image center">
					<Box title="You" />
					<Box title="Computer" />
				</div>
				<div className="main-button center">
					{/* onClick={play()하면 함수가 바로 실행됨} */}
					<button onClick={() => play(choice.scissor.name)}>가위</button>
					<button onClick={() => play(choice.rock.name)}>바위</button>
					<button onClick={() => play(choice.paper.name)}>보</button>
				</div>
			</div>
		</>
	);
}

export default App;
