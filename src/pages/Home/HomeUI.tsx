import React, {FC, Fragment} from 'react';

import { makeStyles } from '@mui/styles';

import { AddToDoForm } from './components/AddToDoForm'
import { ToDoList } from './components/ToDoList'

const useStyles = makeStyles({
    body: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '50px',
    },
    form: {
        width: '40%',
    },
    list_block:{
        width: '100%', 
        paddingTop: '20px', 
        display: 'flex', 
        justifyContent: 'center'
    }
  });

export interface HomeUIProps {
    toDoInputText: string,
    handleChangeToDoInput: any,
    handleClickAddToDo: any,
    hadleClickDeleteToDo: any,
    toDoList: any,
    isLoading: boolean
}

export const HomeUI: FC<HomeUIProps> = ({toDoInputText, hadleClickDeleteToDo, handleChangeToDoInput, handleClickAddToDo, toDoList, isLoading}) => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
        <div className={classes.form}>
            <AddToDoForm 
                toDoInputText={toDoInputText} 
                handleChangeToDoInput={handleChangeToDoInput}
                handleClickAddToDo={handleClickAddToDo}
            />
            {!isLoading ? toDoList.data.map((item: any, index: number) =>(
                <div className={classes.list_block} key={index}>
                    <div style={{width: '95%'}}>
                        <ToDoList content={item.content} id={item.id} handleClickDelete={hadleClickDeleteToDo}/> 
                    </div>
                </div>
             )): (
                new Array(5).fill(0).map((_, index: number) =>(
                    <div className={classes.list_block} key={index}>
                        <div style={{width: '95%'}}>
                            <ToDoList isLoading={true}/> 
                        </div>
                    </div>
                ))
             )}
        </div>
    </div>
  );
}
