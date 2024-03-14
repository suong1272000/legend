import { CSSProperties } from "react"
import SmallFontLabel from "../Labels/SmallFontLabel"

const EventContentTitle = () => {
    const SmallFontLabelStyles:CSSProperties = {
        fontSize: "20px",
        color: "#fff",
        fontWeight: "700",
        background: "url(/)"
    }
    return (
        <>
            <SmallFontLabel content="EVENT 01" />
        </>
    )
}
export default EventContentTitle