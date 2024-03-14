import { CSSProperties } from "react";

export type HeadingLabelProps = {
    content: string;
};
const HeadingLabel = ({content}:HeadingLabelProps) => {
    const styles:CSSProperties = {
        fontSize: "48px",
        fontWeight: "900",
        letterSpacing: "1.5px",
        lineHeight: "72px"
    }
    return (
        <h2>{content}</h2>
    )
}
export default HeadingLabel