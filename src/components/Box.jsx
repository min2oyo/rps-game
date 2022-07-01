import "./Box.css";

const Box = (props) => {
	return (
		<>
			<div className="box">
				<h1>{props.title}</h1>
				<img
					className="item-img"
					src="https://cdn-icons-png.flaticon.com/512/4973/4973989.png"
					alt={`${props.title} 이미지`}
				/>
				<div>WIN</div>
			</div>
		</>
	);
};

export default Box;
