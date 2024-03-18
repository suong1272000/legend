import { CSSProperties } from "react";
import {
	fontSize,
	fontWeight,
	labelColor,
	lineHeight,
} from "../atoms/Labels/Common.styles";
import ParagraphLabel, {
	ParagraphLabelProps,
} from "../atoms/Labels/ParagraphLabel";

const CustomDate = () => {
	const today = new Date();
	const minutes = today.getMinutes().toString().padStart(2, "0");
	const seconds = today.getSeconds().toString().padStart(2, "0");
	const hours = (today.getHours() % 12 || 12).toString().padStart(2, "0");
	const formattedDate = `${today.getFullYear()}/${
		today.getMonth() + 1
	}/${today.getDate()} ${hours}:${minutes}:${seconds}`;

	const TimePgLabelStyles: ParagraphLabelProps = {
		common: {
			color: labelColor["white"],
			fontSize: fontSize["small"],
			fontWeight: fontWeight["small"],
			lineHeight: lineHeight["large"],
		},
		content: `${formattedDate} 기준`,
		style: {
			marginLeft: "15px",
		},
	};
	const Styles: CSSProperties = {
		alignItems: "center",
		cursor: "pointer",
		display: "flex",
	};

	return (
		<a style={Styles}>
			<img
				src="/reload.c8f3f334ef34379ab3f101cc470d3cb1.svg"
				alt="reload"
			/>
			<ParagraphLabel {...TimePgLabelStyles} />
		</a>
	);
};
export default CustomDate;
