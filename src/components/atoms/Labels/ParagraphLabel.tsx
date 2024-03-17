import { CSSProperties } from "react";

export type commonCSSType = {
    fontSize :string;
    fontWeight: string;
    lineHeight: string;
    color: string;
}

export type ParagraphLabelProps = {
    content: string;
    common: commonCSSType;
    style: CSSProperties;
};

const ParagraphLabel = ({content, common, style}:ParagraphLabelProps) => {
    return (
        <p style={{...style, ...common}}>{content}</p>
    )
}
export default ParagraphLabel