import { CSSProperties } from "react";

export type LargeFontLabelProps = {
    content: string;
};
const LargeFontLabel = ({content}:LargeFontLabelProps) => {
    const styles: CSSProperties = {
		fontSize: "22px"
	};
    return (
        <p style={styles}>{content}</p>
    )
}
export default LargeFontLabel