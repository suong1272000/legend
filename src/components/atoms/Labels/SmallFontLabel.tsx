import { CSSProperties } from "react";

export type SmallFontLabelProps = {
    content: string;
};
const SmallFontLabel = ({content}:SmallFontLabelProps) => {
    const styles: CSSProperties = {
		fontSize: "20px"
	};
    return (
        <p style={styles}>{content}</p>
    )
}
export default SmallFontLabel