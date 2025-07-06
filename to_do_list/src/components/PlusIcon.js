import React, {useState} from "react"

export function PlusIcon() {
    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    const handleClick = () => setClick(true)
    const liftClick = () => setClick(false)

    const myStyle = {
        width: "6rem",
        height: "6rem",
        transform: "rotate(45deg)",
        fontSize: "5rem",
        lineHeight: "5rem",
        fontWeight: "900",
        color: click ? "white" : hover ? "hsl(0, 0%, 80%)" : "white",
        backgroundColor: click ? "hsl(16, 100%, 60%)" : hover ? "hsl(16, 100%, 46%)" : "hsl(16, 100%, 56%)",
        border: click ? "5px inset coral" : "5px outset coral",
        borderRadius: "15px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2
    }
    return (
        <button style={myStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleClick} onMouseUp={liftClick}>✖</button>
    )
}