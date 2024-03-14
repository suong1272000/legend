import { CSSProperties } from "react";

export type ParagraphLabelProps = {
    content: string;
};
const ParagraphLabel = ({content}:ParagraphLabelProps) => {
    const styles: CSSProperties = {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
    }
    return (
        <p style={styles}>{content}</p>
    )
}
export default ParagraphLabel