import "./Box.css";

const Box = (props) => {
	return (
		<>
			<div className="box">
				<h1>{props.title}</h1>
				<img
					className="item-img"
					src={props.choose}
					alt={`${props.title} 이미지`}
				/>
				<div className="result">WIN</div>
			</div>
		</>
	);
};

export default Box;
