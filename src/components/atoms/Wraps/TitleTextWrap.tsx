import { CSSProperties } from "react"
import ParagraphLabel from "../Labels/ParagraphLabel"
import SmallFontLabel from "../Labels/SmallFontLabel"

const TitleTextWrap = () => {
    const styles:CSSProperties = {
        position: "relative",
        textAlign: "center",
        margin: "0 auto",
        maxWidth: "533px",
        padding: "220px 0 64px",
        width: "100%",
    }
    const TimeLabelStyles:CSSProperties = {
        background: "rgba(0, 4, 29, .2)",
        borderRadius: "100px",
        color: "#fff",
        display: "flex",
        fontSize: "20px",
        fontWeight: "400",
        margin: "20px auto",
        maxWidth: "420px",
        padding: "12px 40px",
        textAlign: "center"
    }
    const SmallFontLabelStyles:CSSProperties = {
        color: "#60fbf6",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "32px",
        marginBottom: "8px",
    }
    return (
        <section style={styles}>
            <img src="/logo.6fbe6709eea4e3f652ac.svg" alt="logo" />
            <SmallFontLabel style={TimeLabelStyles} content="2022/07/01 10:00 - 2022/07/31 23:59" />
            <SmallFontLabel style={SmallFontLabelStyles}content="별 수호자의 귀환을 환영하는 PC방의 특별한 혜택!" />
            <ParagraphLabel content="무작위 챔피언, 무작위 스킨, 신화 정수를 선물받고"  />
            <ParagraphLabel content="매주 달라지는 별 수호자 스킨도 무료로 체험하세요."  />
        </section>
    )
}
export default TitleTextWrap