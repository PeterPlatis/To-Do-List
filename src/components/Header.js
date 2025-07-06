export default function Header() {
    const myStyle = {
        position: "fixed",
        top: 0,
        height: "8rem",
        borderBottom: "10px ridge hsl(196, 44%, 44%)",
        backgroundColor: "hsl(196, 44%, 24%)"
    }
    return (
        <section style={myStyle}></section>
    )
}