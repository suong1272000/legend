import { CSSProperties } from "react"
import SectionWrap from "./atoms/Wraps/SectionWrap"

const Main = () => {
    const styles:CSSProperties = {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        textAlign: "center",
        position: "relative",
        width: "100%",
        zIndex: "2",
    }
    return (
        <main style={styles}>
            <SectionWrap />
        </main>
    )
}
export default Main