import { CSSProperties } from "react"
import EventLabel from "../Labels/EventLabel"
import ParagraphLabel, { ParagraphLabelProps } from "../Labels/ParagraphLabel"
import { fontSize, fontWeight, labelColor, lineHeight } from "../Labels/Common.styles"
import HeadingLabel from "../Labels/HeadingLabel"
import PointPgLabel from "../Labels/PointPgLabel"

const EventContentTitleSecond = () => {
    const styles:CSSProperties = {
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
    }

    const PgStyles:ParagraphLabelProps = {
        common: {
            color: labelColor['white'],
            fontSize: fontSize['large'],
            fontWeight: fontWeight["medium"],
            lineHeight: lineHeight['large'],
        },
        content: "별 수호자, PC방 강림",
        style: {}
    }

    return (
        <div style={styles}>
            <EventLabel content="EVENT 02" />
            <ParagraphLabel {...PgStyles}/>
            <HeadingLabel firstContent="별 수호자 스킨을" point="PC방에서" secondContent="만나보세요!" />
        </div>
    )
}
export default EventContentTitleSecond