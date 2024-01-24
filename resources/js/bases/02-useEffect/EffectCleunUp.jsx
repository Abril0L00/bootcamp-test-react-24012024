

import { useState } from "react";
import { Message } from "./Message";

export const EffectCleunUp = () => {
    const [showComponent,setShorComponent] = useState(false);

    const handleChangeFlag = () => {
        setShorComponent(prev => !prev);
    }

    return (
        <>
        <h1>Effect Cleun Up</h1>
        <hr />
        <h3>
            Componente : {''}
            {
                showComponent === false
                ? 'Componente desmontado'
                : 'Componente montado'
            }
        </h3>

        {showComponent && <Message></Message>}

        <button
        onClick={handleChangeFlag}
        >
            {
                showComponent
                ? 'Desmontar'
                : 'Montar'
            }
        </button>
        </>
    );
}