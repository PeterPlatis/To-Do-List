import {PlusIcon} from "./PlusIcon.js"
export default function Footer() {
    const myStyle = {
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "10rem",
        background: "linear-gradient(hsla(196, 44%, 24%, 0) 0,hsl(196, 44%, 24%) 30%,hsl(196, 44%, 24%) 30%,hsl(196, 44%, 24%) 100%)",
        display: "flex",
        justifyContent: "center"
    }
    return (
        <section style={myStyle}>
            <PlusIcon/>
        </section>
    )
}