import React from 'react'
import { Button } from '@material-ui/core'

type Props = {
    buttonAction: () => void
    buttonText: string
    buttonColor: "inherit" | "primary" | "secondary" | "default" | undefined
    isOn?: boolean
}

const TimerButton: React.FC<Props> = ({buttonAction, buttonText, buttonColor, isOn}) => {
    return (
        <>
            <Button color={buttonColor} variant='contained' onClick={() => buttonAction()} >{buttonText}</Button>
        </>
    )
}

export default TimerButton
