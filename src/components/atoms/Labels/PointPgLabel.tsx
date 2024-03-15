import { CSSProperties } from "react"

const PointPgLabel = () => {
    const pgStyles:CSSProperties = {
        color: "#fff",
        fontSize: "22px",
        fontWeight: "400px",
        lineHeight: "32px",
        marginTop: "10px",
    }
    const pointStyles:CSSProperties = {
        color: "#fe4879",
    }
    return (
        <>
            <p style={pgStyles}>
                이벤트 기간 동안&nbsp;
                <span style={pointStyles}>
                     PC방에서 플레이
                </span>
                하고 선물을 받으세요.
            </p>
        </>
    )
}
export default PointPgLabel