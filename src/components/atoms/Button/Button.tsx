import { CSSProperties } from "react"

const Button = () => {
    const ButtonStyles:CSSProperties = {
        background: "none",
        border: "1px solid #eae8e8",
        borderRadius: "100px",
        boxShadow: "none",
        color: "#fff",
        fontSize: " 20px",
        fontWeight: "400",
        height: "46px",
        lineHeight: "35px",
        width: "166px",
        position: "relative",
        top: "100px",
        cursor: "pointer",
    }
    return (
        <button style={ButtonStyles}>획득하기</button>
    )
}
export default Button