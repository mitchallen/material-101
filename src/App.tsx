import React, { useCallback, useState } from 'react';
import './App.css';
import { Button, Card, CardActions, CardContent, FormControl, TextField, Tooltip, Typography } from '@mui/material';
import { SmartToy } from '@mui/icons-material';
import { AppStyles } from './AppStyles';

function App() {

  const [userName, setUserName] = useState('');

  const handleUserNameChange = useCallback((event) => {
    setUserName(event.target.value);
  }, []);

  const handleClickHello = useCallback((event) => {
    alert(`Hello ${userName}!`)
  }, [userName]);

  const handleClickYo = useCallback((event) => {
    alert(`Yo ${userName}!`)
  }, [userName]);

  return (
    <Card style={AppStyles.cardStyle}>
      <CardContent>
        <SmartToy style={AppStyles.logoStyle} fontSize="large" />
        <Typography gutterBottom variant="h5" component="h2">
          Material 101
        </Typography>
      </CardContent>
      <CardContent>
        <FormControl style={{ width: '50%' }} >
          <TextField
            id="userName"
            name='userName'
            label="Your name"
            value={userName}
            onChange={handleUserNameChange}
            helperText='Enter your name'
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Tooltip title="Click to say hello">
          <span>
            <Button color='primary'
              disabled={userName.length === 0}
              variant="outlined"
              onClick={handleClickHello}
              key={1}>
              Say Hello
            </Button>
          </span>
        </Tooltip>
        <Tooltip title="Click to say yo">
          <span>
            <Button color='secondary'
              disabled={userName.length === 0}
              variant="outlined"
              onClick={handleClickYo}
              key={2}>
              Say Yo
            </Button>
          </span>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default App;
