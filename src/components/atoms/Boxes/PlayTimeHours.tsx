import { CSSProperties } from "react";

const PlayTimeHours = () => {
	const ulStyles: CSSProperties = {
		display: "flex",
		height: "100%",
		width: "calc(100% - 112px)",
		padding: "32px 20px",
		justifyContent: "space-between",
		alignItems: "center",
		listStyle: "none",
		position: "relative",
		left: "50px",
	};
	const liStyles: CSSProperties = {
		border: "1px solid hsla(0, 0%, 100%, .2)",
		borderRadius: "100px",
		color: "#fff",
		fontSize: "16px",
		fontWeight: "400",
		height: "40px",
		lineHeight: "40px",
		position: "relative",
		width: "68px",
	};
	const spanStyles: CSSProperties = {
		backgroundColor: "#00041d",
		backgroundImage: "url(/Subtraction.427dc93ac4fc1c0e0106.svg)",
		backgroundPosition: "center 50%",
		backgroundRepeat: "no-repeat",
		backgroundSize: "24px 24px",
		height: "100%",
		left: "15px",
		maxHeight: "24px",
		maxWidth: "24px",
		padding: "5px 20px",
		position: "absolute",
		top: "-90px",
	};
	return (
		<ul style={ulStyles}>
			<li style={liStyles}>
				<span
					style={{
						...spanStyles,
						backgroundImage:
							"url(/ActiveSubtraction.88d27c6b97a703e4195c.svg)",
					}}
				></span>
				<span>0</span>
			</li>
			<li style={liStyles}>
				<span style={spanStyles}></span>
				<span>1시간</span>
			</li>
			<li style={liStyles}>
				<span style={spanStyles}></span>
				<span>2시간</span>
			</li>
			<li style={liStyles}>
				<span style={spanStyles}></span>
				<span>3시간</span>
			</li>
			<li style={liStyles}>
				<span style={spanStyles}></span>
				<span>4시간</span>
			</li>
			<li style={liStyles}>
				<span style={spanStyles}></span>
				<span>5시간</span>
			</li>
		</ul>
	);
};
export default PlayTimeHours;
