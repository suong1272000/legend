import { CSSProperties } from "react";

export type ParagraphLabelProps = {
    content: string;
};
const ParagraphLabel = ({content}:ParagraphLabelProps) => {
    const styles: CSSProperties = {
        fontSize: "16px",
    }
    return (
        <p style={styles}>{content}</p>
    )
}
export default ParagraphLabel