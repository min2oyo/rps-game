import { useState } from "react";
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

	// 변수
	const [MyChoice, setMyChoice] = useState(null);
	const [ComputerChoice, setComputerChoice] = useState(null);

	// 함수
	const play = (choose) => {
		// 나의 선택
		setMyChoice(choose.img);

		// 컴퓨터 선택
		const itemArray = Object.keys(choice);
		const random = Math.trunc(Math.random() * itemArray.length) + 1;

		switch (random) {
			case 1:
				setComputerChoice(choice.scissor.img);
				break;
			case 2:
				setComputerChoice(choice.rock.img);
				break;
			case 3:
				setComputerChoice(choice.paper.img);
				break;
			default:
				break;
		}
	};

	// return
	return (
		<>
			<div className="container">
				<div className="main-image center">
					<Box title="You" choose={MyChoice} />
					<Box title="Computer" choose={ComputerChoice} />
				</div>
				<div className="main-button center">
					{/* onClick={play()하면 함수가 바로 실행됨} */}
					<button onClick={() => play(choice.scissor)}>가위</button>
					<button onClick={() => play(choice.rock)}>바위</button>
					<button onClick={() => play(choice.paper)}>보</button>
				</div>
			</div>
		</>
	);
}

export default App;
