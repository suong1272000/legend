import { CSSProperties } from "react"
import EventContentTitle from "./EventContentTitle"
import PlayTimeBarWrap from "./PlayTimeBarWrap"
import PlayTimeItemWrap from "./PlayTimeItemWrap"
import EventContentTitleSecond from "./EventContentTitleSecond"
import WeekListWrap from "./WeekListWrap"

const SectionWrap = () => {
    const styles:CSSProperties = {
        padding: "40px 0 60px",
        margin: "0",
        textAlign: "center",
        lineHeight: "1.15",
    }
    return (
        <main style={styles}>
            <EventContentTitle />
            <PlayTimeBarWrap />
            <PlayTimeItemWrap />
            <EventContentTitleSecond />
            <WeekListWrap titleNum="1" content="7/1(금) - 7/10(일)" src="/Week1.98dffb866d0387474757.png"/>
            <WeekListWrap titleNum="2" content="7/11(월) - 7/17(일)" src="/Week2.b8449fdc4e301c3c57f4.png"/>
            <WeekListWrap titleNum="3" content="7/18(월) - 7/24(일)" src="/Week3.9db9cf6e1a8e39c169dd.png"/>
            <WeekListWrap titleNum="4" content="7/25(월) - 7/31(일)" src="/Week4.1e453bfa0cb23e2ec595.png"/>
        </main>
    )
}
export default SectionWrap