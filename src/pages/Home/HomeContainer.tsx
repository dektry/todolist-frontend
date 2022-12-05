import React, { useState, useEffect } from 'react';

import { useSnackbar } from 'notistack';

import { HomeUI } from './HomeUI';

import { useFetchAllToDosQuery, useDeleteTodoMutation, useCreateToDoMutation } from '../../api/toDoListApi';

export function HomeContainer() {
  const {
    isError: isToDoListError,
    isLoading: isListLoading,
    data: toDoList,
    isFetching: isListFetching,
  } = useFetchAllToDosQuery({ limit: 10, page: 0, isCompleted: false });
  const [deleteToDo, { isLoading: isDeleteLoading, isError: isDeleteError }] = useDeleteTodoMutation();
  const [createToDo, { isLoading: isCreateLoading, isError: isCreateError }] = useCreateToDoMutation();

  const isLoading = isListLoading || isListFetching || isDeleteLoading || isCreateLoading;

  const [toDoInputText, setToDoInputText] = useState<string>('');

  const { enqueueSnackbar } = useSnackbar();

  const handleChangeToDoInput = (e: React.FormEvent<HTMLInputElement>) => {
    setToDoInputText(e.currentTarget.value);
  };

  const handleClickAddToDo = () => {
    if (!toDoInputText) enqueueSnackbar('ToDo name cannot be empty!', { variant: 'error' });
    else createToDo({ content: toDoInputText });
  };

  useEffect(() => {
    if (isDeleteError || isCreateError || isToDoListError)
      enqueueSnackbar('Opps, network error!', { variant: 'error' });
  }, [isDeleteError, isCreateError, isToDoListError]);

  return (
    <HomeUI
      toDoInputText={toDoInputText}
      toDoList={toDoList}
      isLoading={isLoading}
      handleChangeToDoInput={handleChangeToDoInput}
      handleClickAddToDo={handleClickAddToDo}
      hadleClickDeleteToDo={deleteToDo}
    />
  );
}
