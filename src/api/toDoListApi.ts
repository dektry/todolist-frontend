import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const toDoListApi = createApi({
  reducerPath: 'toDoListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-second-app-dot-todo-list-3c5e4.lm.r.appspot.com/api/v1/to-do-list',
  }),
  tagTypes: ['ToDoList'],
  endpoints: (builder) => ({
    fetchAllToDos: builder.query({
      query: (args: { limit: number; page: number; isCompleted: boolean }) => {
        const { limit, page, isCompleted } = args;

        return {
          url: '',
          params: { limit, page, isCompleted },
        };
      },

      providesTags: () => ['ToDoList'],
    }),
    deleteTodo: builder.mutation({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ToDoList'],
    }),
    createToDo: builder.mutation({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['ToDoList'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFetchAllToDosQuery, useDeleteTodoMutation, useCreateToDoMutation } = toDoListApi;
