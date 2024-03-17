import { CSSProperties } from "react"
import { fontSize, fontWeight, labelColor, lineHeight } from "../Labels/Common.styles"
import ParagraphLabel, { ParagraphLabelProps } from "../Labels/ParagraphLabel"

type WeekListWrapProps ={
    titleNum: string,
    content: string,
    src: string,
}
const WeekListWrap = ({titleNum, content, src}:WeekListWrapProps) => {
    const Styles:CSSProperties = {
        background: "none",
        height: "100%",
        margin: "60px 8px 0",
        maxHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        alignItems: "center",
    }
    const titleStyles:CSSProperties = {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "17px",
        color: "#fff",
        border: "1px solid hsla(0, 0%, 100%, .3)",
        borderRadius: "100px",
        marginBottom: "17px",
        padding: "7px 24px 8px",
    }

    const PgStyle:ParagraphLabelProps = {
        common: {
            color: labelColor['pink'],
            fontSize: fontSize['extraLarge'],
            fontWeight: fontWeight['small'],
            lineHeight: lineHeight['extraLarge']
        },
        content: content,
        style: {
            marginBottom: "25px"
        }
    }

    const imgStyles:CSSProperties = {
        maxWidth: "960px",
        width: "100%",
    }

    return (
        <article style={Styles}>
            <h4 style={titleStyles}>{titleNum}주차 무료체험</h4>
            <ParagraphLabel {...PgStyle} />
            <img style={imgStyles} src={src} alt="스킨이미지" />
        </article>
    )
}
export default WeekListWrap