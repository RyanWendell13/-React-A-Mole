import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }
    let displayMole
    if (theMole){
        displayMole = <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} />
    }
    else{
        displayMole = <EmptySlot toggle={setTheMole} />

    }
    return (
        <div>
            {displayMole}
        </div>
    )
}
export default MoleContainer
