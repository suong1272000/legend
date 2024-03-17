import { CSSProperties } from "react";
import Button from "../Button/Button";
import ParagraphLabel, { ParagraphLabelProps } from "../Labels/ParagraphLabel";
import { fontSize, fontWeight, labelColor, lineHeight } from "../Labels/Common.styles";

type PlayTimeItems_inActiveProps = {
    title: string;
    content: string;
    src: string;
}
const PlayTimeItems_inActive = ({title,content,src}:PlayTimeItems_inActiveProps) => {
    const Styles:CSSProperties = {
        filter: "grayscale(1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        alignItems: "center",
        background: "url(/item_box_frame.png) no-repeat 50%",
        height: "560px",
        width: "292px",
    }
    const ContentsBoxStyle:CSSProperties = {
        background: "rgba(77, 79, 219, .05)",
        borderRadius: "60px",
        height: "440px",
        top: "60px",
        width: "248px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
    }
    const TitleStyles:ParagraphLabelProps = {
        common: {
            color: labelColor['white'],
            fontSize: fontSize['medium'],
            fontWeight: fontWeight['extraLarge'],
            lineHeight: lineHeight['medium'],
        },
        content: title,
        style: {
            marginTop: "30px",
        }
    }
    const imgBoxStyles:CSSProperties = {
        position: "relative",
    }
    const imgStyle:CSSProperties = {
        height: "100%",
        width: "100%",
        maxHeight: "200px",
        maxWidth: "200px",
        margin: "0 auto 24px",
    }
    const lineStyle:CSSProperties = {
        background: "url(/line.png) no-repeat 50%",
        height: "10px",
        margin: "0 auto",
        maxWidth: "170px",
        width: "100%",
        display: "block"
    }
    const spanStyle:CSSProperties = {
        color: "#fff",
        display: "block",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "23px",
        fontFamily: "Pretendard, sans-serif",
        marginBottom: "-25px"
    }
    const PgStyles:ParagraphLabelProps = {
        common: {
            color: labelColor['white'],
            fontSize: "18px",
            fontWeight: fontWeight['large'],
            lineHeight: lineHeight['medium'],
        },
        content: content,
        style: {
            marginBottom: "36px",
        }
    }

    return (
        <article style={Styles}>
            <div style={ContentsBoxStyle}>
                <ParagraphLabel {...TitleStyles}/>
                <div style={imgBoxStyles}>
                    <img style={imgStyle} src={src} alt="토큰이미지" />
                    <span style={lineStyle}></span>
                </div>
                <span style={spanStyle}>전원증정</span>
                <ParagraphLabel {...PgStyles}/>
            </div>
            <Button />
        </article>
    )
}
export default PlayTimeItems_inActive