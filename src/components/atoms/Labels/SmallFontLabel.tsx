import { CSSProperties } from "react";

export type SmallFontLabelProps = {
    content: string;
    style?: CSSProperties;
};
const SmallFontLabel = ({content, style}:SmallFontLabelProps) => {
    return (
        <p style={style}>{content}</p>
    )
}
export default SmallFontLabel