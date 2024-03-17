import { CSSProperties } from "react";

export type HeadingLabelProps = {
    firstContent: string;
    point: string;
    secondContent: string;
};


const HeadingLabel = ({firstContent,point,secondContent}:HeadingLabelProps) => {
    const contentStyles:CSSProperties = {
        color: "#fff",
        fontSize: "48px",
        fontWeight: "900",
        letterSpacing: "1.5px",
        lineHeight: "72px",
        marginTop: "20px",
        fontFamily: "VitroCore",
    }
    const pointStyles:CSSProperties = {
        color: "#fe4879"
    }
    return (
        <>
            <h2 style={contentStyles}>{firstContent}</h2>
            <h2 style={{...contentStyles, marginTop: "-4px"}}><span style={pointStyles}>{point}</span>{secondContent}</h2>
        </>
    )
}
export default HeadingLabel