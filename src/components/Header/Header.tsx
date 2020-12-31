import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Header = () => {
    return (
        <div>
            <AppBar position='fixed' style={{background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)'}}>
                <Toolbar>
                    <Typography variant='h4' color='textPrimary'>Timer App</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
