import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [ theName, newName] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handling() {
        setIsEditing((editing) => !editing)
        if(isEditing) {
        onChangeName(symbol, theName)
        }
     }

     function nameHandle(event) {
        newName(event.target.value)
    }

    let playerName = <span className="player-name">{theName}</span>
    if (isEditing) {
        playerName = (<input type="text" required value={theName} onChange={nameHandle}
        />);
    }
    
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handling}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}