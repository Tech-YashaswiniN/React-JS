export default function({name}){
    let styles={color:"blue"}
    return (
        <>
            <h1>Hello <span style={styles}>{name}&#128522;</span></h1>
        </>
    )
}