import { CSSProperties } from "react";

export type H3LargeFontLabelProps = {
    content: string;
};
const H3LargeFontLabel = ({content}:H3LargeFontLabelProps) => {
    const styles: CSSProperties = {
		fontSize: "32px"
	};
    return (
        <h3 style={styles}>{content}</h3>
    )
}
export default H3LargeFontLabel