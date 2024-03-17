import { CSSProperties } from "react"

const BgTop = () => {
    const styles:CSSProperties = {
        background: "url(/bg_top.4e4fa798f92b404cf031.jpg) no-repeat 50% top",
        backgroundSize: "contain",
        height: "100%",
        maxHeight: "1080px",
        overflow: "hidden",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: "0",
    }


    return(
        <div style={styles}></div>
    )
}
export default BgTop