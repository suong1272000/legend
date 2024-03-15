import { CSSProperties } from "react"
import ParagraphLabel, { ParagraphLabelProps } from "../Labels/ParagraphLabel"
import TimeLabel from "../Labels/TimeLabel"
import { fontSize, fontWeight, labelColor, lineHeight } from "../Labels/Common.styles"

const TitleTextWrap = () => {
    const styles:CSSProperties = {
        position: "relative",
        textAlign: "center",
        margin: "0 auto",
        maxWidth: "533px",
        padding: "220px 0 64px",
        width: "100%",
    }

    const common ={
        color: labelColor['white'],
        fontSize: fontSize['small'],
        fontWeight: fontWeight['small'],
        lineHeight: lineHeight['medium'],
    }

    const PointLabelStyles:ParagraphLabelProps = {
        common:{
            color: labelColor['mint'],
            fontSize: fontSize['medium'],
            fontWeight: fontWeight["large"],
            lineHeight: lineHeight["large"],
        },
        content:"별 수호자의 귀환을 환영하는 PC방의 특별한 혜택!",
        style:{
            marginBottom: "8px",
        },
    }
    const ParagraphLabelStylesFirst:ParagraphLabelProps = {
        common,
        content:"무작위 챔피언, 무작위 스킨, 신화 정수를 선물받고",
        style:{}
    }
    const ParagraphLabelStylesSecond:ParagraphLabelProps = {
        common,
        content:"매주 달라지는 별 수호자 스킨도 무료로 체험하세요.",
        style:{}
    }

    return (
        <section style={styles}>
            <img src="/logo.6fbe6709eea4e3f652ac.svg" alt="logo" />
            <TimeLabel />
            <ParagraphLabel {...PointLabelStyles} />
            <ParagraphLabel {...ParagraphLabelStylesFirst}/>
            <ParagraphLabel {...ParagraphLabelStylesSecond}/>
        </section>
    )
}
export default TitleTextWrap