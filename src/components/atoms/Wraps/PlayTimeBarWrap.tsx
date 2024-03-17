import { CSSProperties } from "react"
import CustomDate from "../../util/CustomDate"
import { fontSize, fontWeight, labelColor, lineHeight } from "../Labels/Common.styles"
import ParagraphLabel, { ParagraphLabelProps } from "../Labels/ParagraphLabel"
import SpanLabel, { SpanLabelProps } from "../Labels/SpanLabel"
import PlayTimeBar from "../Boxes/PlayTimeBar"
import PlayTimeHours from "../Boxes/PlayTimeHours"

const PlayTimeBarWrap = () => {
    const Styles:CSSProperties = {
        marginTop: "85px",
        width: "100%    "
    }
    const PlayTimeTopStyles:CSSProperties = {
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
    }
    const SpanPointStyles:SpanLabelProps = {
        common: {
            color: labelColor['purple'],
            fontSize: fontSize['large'],
            fontWeight: fontWeight['extraLarge'],
            lineHeight: lineHeight['large'],
        },
        content: "플레이어",
        style: {}
    }
    const SpanLabelStyles:SpanLabelProps = {
        common: {
            color: labelColor['white'],
            fontSize: fontSize['large'],
            fontWeight: fontWeight['medium'],
            lineHeight: lineHeight['large'],
        },
        content: "님의 플레이시간은?",
        style: {}
    }

    return (
        <div style={Styles}>
            <div style={PlayTimeTopStyles}>
                <p>
                <SpanLabel {...SpanPointStyles} />
                <SpanLabel {...SpanLabelStyles} />
                </p>
                <CustomDate />
            </div>
            <PlayTimeBar />
            <PlayTimeHours />
        </div>
    )
}

export default PlayTimeBarWrap