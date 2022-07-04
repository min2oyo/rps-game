import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
	// DB
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
	const [UserChoice, setUserChoice] = useState(null);
	const [ComputerChoice, setComputerChoice] = useState(null);
	const [UserResult, setUserResult] = useState(null);
	const [ComputerResult, setComputerResult] = useState(null);
	const result = [`WIN`, `LOSE`, "TIE"];

	// 함수
	const play = (choose) => {
		// 나의 선택
		setUserChoice(choose);

		// 컴퓨터 선택
		const itemArray = Object.keys(choice);
		const random = Math.trunc(Math.random() * itemArray.length);
		const computer = itemArray[random];
		setComputerChoice(choice[computer]);

		// 중간확인
		console.log(UserChoice.name);
		console.log(ComputerChoice.name);

		// 승패
		if (UserChoice.name === ComputerChoice.name) {
			setUserResult(result[2]);
			setComputerResult(result[2]);
		} else if (
			(UserChoice.name === choice.scissor.name &&
				ComputerChoice.name === choice.paper.name) ||
			(UserChoice.name === choice.rock.name &&
				ComputerChoice.name === choice.scissor.name) ||
			(UserChoice.name === choice.paper.name &&
				ComputerChoice.name === choice.rock.name)
		) {
			setUserResult(result[0]);
			setComputerResult(result[1]);
		} else {
			setUserResult(result[1]);
			setComputerResult(result[0]);
		}
	};

	// return
	return (
		<>
			<div className="container">
				<div className="main-image center">
					<Box title="User" choose={UserChoice} result={UserResult} />
					<Box
						title="Computer"
						choose={ComputerChoice}
						result={ComputerResult}
					/>
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
