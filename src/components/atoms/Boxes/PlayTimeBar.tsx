import { CSSProperties } from "react";

const PlayTimeBar = () => {
	// View - Action - Container[State]
	const BoxStyles: CSSProperties = {
		width: "100%",
		height: "24px",
		padding: "45px 40px",
		maxWidth: "880px",
		margin: "40px auto 0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "1px solid rgba(77, 79, 219, .5)",
		borderRadius: "100px",
		textAlign: "center",
	};
	const LineStyles: CSSProperties = {
		background: "hsla(0, 0%, 100%, .2)",
		height: "2px",
		maxWidth: "100%",
		width: "calc(100% - 30px)",
	};
	const PlayTimeStyles: CSSProperties = {
		backgroundColor: "#fe4879",
		borderRadius: "100px",
		color: "#fff",
		display: "block",
		fontSize: "24px",
		fontWeight: "700",
		height: "50px",
		lineHeight: "50px",
		position: "relative",
		width: "166px",
	};
	const PlayTimeSpanBeforeStyles: CSSProperties = {
		content: "''",
		position: "absolute",
		top: "-10px",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "0",
		height: "0",
		borderStyle: "solid",
		borderColor: "transparent transparent #fe4879",
		borderWidth: "13px 10px",
		zIndex: "-1",
	};

	return (
		<>
			<div style={BoxStyles}>
				<div style={LineStyles}>
					<div style={{ height: "100%", position: "relative" }}>
						<div
							style={{
								position: "absolute",
								top: "25px",
								zIndex: "10",
								left: "-82px",
							}}
						>
							<span style={PlayTimeSpanBeforeStyles}></span>
							<span style={PlayTimeStyles}>00:00:00</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PlayTimeBar;
