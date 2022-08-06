import { useEffect } from "react"
import moleHillImg from './RR-React-A-Mole-Images-main/molehill.png'
const EmptySlot = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img style={{'width': '30vw'}} src={moleHillImg} />
        </div>
    )
}

export default EmptySlot