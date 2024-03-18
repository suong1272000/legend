import { CSSProperties } from "react";
import { commonCSSType } from "./ParagraphLabel";

export type SpanLabelProps = {
    content: string;
    common: commonCSSType;
    style: CSSProperties;
}
const SpanLabel = ({content, style, common}:SpanLabelProps) => {
    return (
        <span style={{...style, ...common}}>{content}</span>
    )
}
export default SpanLabel