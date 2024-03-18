import { CSSProperties } from "react";

type EventLabelProps = {
    content: string;
}

const EventLabel = ({content}:EventLabelProps) => {
    const styles:CSSProperties = {
        background: "url(/Eventbg.png)",
        backgroundSize: "contain",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "700",
        height: "40px",
        lineHeight: "40px",
        margin: "0 auto 32px",
        maxWidth: "217px",
        width: "100%",
    } 

    return (
        <div style={styles}>{content}</div>
    )
}

export default EventLabel