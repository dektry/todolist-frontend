import React, {FC} from 'react';

import { Typography, Card, CardContent, Skeleton, IconButton} from '@mui/material';
import { Delete, Build } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';


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

interface ToDoListProps {
    content?: string,
    id?: number,
    isLoading?: boolean,
    handleClickDelete?: any
}

export const ToDoList: FC<ToDoListProps> = ({content, id, handleClickDelete, isLoading = false}) => {
  const classes = useStyles();

  return (
    <Card className={classes.form}>
        <CardContent style={{ display: "flex", justifyContent: 'space-between'}}>
            <Typography component="div" variant="h6">
                {isLoading? <Skeleton width="120px"/> : content}
            </Typography>
            <div>
                {isLoading
                    ? 
                        (<Skeleton><Delete fontSize="small" /></Skeleton>)
                    :
                        (
                        <IconButton
                            color="error"
                            aria-label="Delete"
                            onClick={() => handleClickDelete(id)}
                        >
                            <Delete fontSize="small" />
                        </IconButton>
                        )
                }
            </div>
        </CardContent>
    </Card>
  );
}
