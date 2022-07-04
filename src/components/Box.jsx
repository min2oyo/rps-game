import "./Box.css";

const Box = (props) => {
	return (
		<>
			<div className="box">
				<h1>{props.title}</h1>
				{props.choose !== null ? (
					<img
						className="item-img"
						src={props.choose.img}
						alt={`${props.title} 이미지`}
					/>
				) : (
					<h1>Ready</h1>
				)}
				<h2>{props.choose.name}</h2>
				<div className="result">WIN</div>
			</div>
		</>
	);
};

export default Box;
