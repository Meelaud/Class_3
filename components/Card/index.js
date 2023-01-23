export default function Card ({
    degree = "none",
    colour = "purple",
    font = 0,
    image = 'icon/persontwo.png'
}) {
    return (
        <div style = {{backgroundColor: colour, fontSize: font}}>
            {
                colour === "transparent" ? <img src = { 'icon/finance.png'} width = '50' />:
                colour === "blue" ? <img src = { 'icon/personThree.png'} width = '50' />: 
                                    <img src = {image} width = "50" />  
            }
            {degree}
        </div>
    )
}