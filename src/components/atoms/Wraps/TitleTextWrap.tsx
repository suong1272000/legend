import { CSSProperties } from "react"
import ParagraphLabel from "../Labels/ParagraphLabel"
import SmallFontLabel from "../Labels/SmallFontLabel"

const TitleTextWrap = () => {
    const styles:CSSProperties = {
        position: "relative",
        textAlign: "center"
    }
    return (
        <section style={styles}>
            <img src="/logo.6fbe6709eea4e3f652ac.svg" alt="logo" />
            <SmallFontLabel content="2022/07/01 10:00 - 2022/07/31 23:59" />
            <SmallFontLabel content="별 수호자의 귀환을 환영하는 PC방의 특별한 혜택!" />
            <ParagraphLabel content="무작위 챔피언, 무작위 스킨, 신화 정수를 선물받고"  />
            <ParagraphLabel content="매주 달라지는 별 수호자 스킨도 무료로 체험하세요."  />
        </section>
    )
}
export default TitleTextWrap