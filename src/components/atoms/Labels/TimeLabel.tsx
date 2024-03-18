import { CSSProperties } from "react"

const TimeLabel = () => {
    const styles:CSSProperties = {
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
    return (
        <p style={styles}>2022/07/01 10:00 - 2022/07/31 23:59</p>
    )
}
export default TimeLabel