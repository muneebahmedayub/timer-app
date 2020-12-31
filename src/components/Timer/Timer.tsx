import React, { useState, useEffect } from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import TimerButton from '../TimerButton/TimerButton'

const Timer = () => {
    const [isOn, setIsOn] = useState<boolean>(false)
    const [seconds, setSeconds] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    
    useEffect(() => {
        if(seconds > 4) {
            setSeconds(prevSeconds => prevSeconds*0)
            setMinutes(prevMinutes => ++prevMinutes)
        }
    }, [seconds])
    
    const timer = () => {
        
        if(seconds > 4) {
            console.log('true')
            setSeconds(0)
            return 
        }else {
            
            setSeconds(prevSeconds => ++prevSeconds)
        }
    }
    console.log(seconds)
    
    
    const startTimer = () => {
        const interval = setInterval(timer, 1000)
        
    }

    const stopTimer = () => {

    }

    const reset = () => {

    }

    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container direction='column'>
                        <Grid item className='timer-values'>
                            <Typography variant='h2' align='center'>{minutes}:{seconds}</Typography>
                        </Grid>
                        <Grid item container justify='space-around'>
                            <TimerButton
                                buttonAction={startTimer}
                                buttonText='Start'
                                buttonColor='primary'
                                isOn={isOn}
                            />
                            <TimerButton
                                buttonAction={stopTimer}
                                buttonText='Stop'
                                buttonColor='secondary'
                                // isOn={isOn}
                            />
                            <TimerButton
                                buttonAction={reset}
                                buttonText='Reset'
                                buttonColor='inherit'
                                // isOn={isOn}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Timer
