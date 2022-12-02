import React, {FC} from 'react';

import { Input, Button, Card, CardContent} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { HomeUIProps } from '../HomeUI'

const useStyles = makeStyles({
    input: {
        width: "90%"
    },
    button: {
        width: "10%" 
    },
    form: {
        width: "100%"
    }
  });

interface AddToDoFormProps extends Partial<HomeUIProps>{}

export const AddToDoForm: FC<AddToDoFormProps> = ({toDoInputText, handleChangeToDoInput, handleClickAddToDo}) => {
  const classes = useStyles();

  return (
    <Card className={classes.form}>
        <CardContent style={{ display: "flex", }}>
            <Input
                inputProps={{
                    "aria-label": "Description"
                }}
                className={classes.input}
                value={toDoInputText} 
                onChange={handleChangeToDoInput} 
                placeholder="Enter todo name"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleClickAddToDo}
            >
                Add
            </Button>
        </CardContent>
    </Card>
  );
}
