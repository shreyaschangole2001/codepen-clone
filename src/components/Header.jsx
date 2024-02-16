import React from 'react'

import{ AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
`

const Header = () => {

        const logo = 'data:image/png;base64,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';

  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt='logo' style={{ width: 40 }}/>
        </Toolbar>
    </Container>
  )
}

export default Header;
