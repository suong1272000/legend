import { CSSProperties } from "react"
import EventLabel from "../Labels/EventLabel"
import ParagraphLabel, { ParagraphLabelProps } from "../Labels/ParagraphLabel"
import { fontSize, fontWeight, labelColor, lineHeight } from "../Labels/Common.styles"
import HeadingLabel from "../Labels/HeadingLabel"
import PointPgLabel from "../Labels/PointPgLabel"

const EventContentTitle = () => {
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
        content: "별 수호자가 가져온 반짝반짝한 선물!",
        style: {}
    }

    return (
        <div style={styles}>
            <EventLabel content="EVENT 01" />
            <ParagraphLabel {...PgStyles}/>
            <HeadingLabel firstContent="PC방에서 플레이하면" point="챔피언, 스킨, 신화정수" secondContent="가 펑펑!" />
            <PointPgLabel />
        </div>
    )
}
export default EventContentTitle