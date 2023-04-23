import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";
import axios, { AxiosResponse } from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

jest.mock("axios");

const testTodo = {
  id: 1,
  title: "Test Todo",
  completed: false,
};

describe("TodoItem component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the todo item with the correct text and checkbox state", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TodoItem todo={testTodo} />
      </QueryClientProvider>
    );
    expect(screen.getByText(testTodo.title)).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("toggles the todo item when the checkbox is clicked", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.put.mockResolvedValue({} as AxiosResponse);

    render(
      <QueryClientProvider client={queryClient}>
        <TodoItem todo={testTodo} />
      </QueryClientProvider>
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    await waitFor(() => expect(axios.put).toHaveBeenCalledTimes(1));
    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:3001/todos/${testTodo.id}`,
      {
        title: testTodo.title.trim(),
        completed: !testTodo.completed,
      }
    );
  });

  it("deletes the todo item when the delete button is clicked", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.delete.mockResolvedValue({} as AxiosResponse);
    render(
      <QueryClientProvider client={queryClient}>
        <TodoItem todo={testTodo} />
      </QueryClientProvider>
    );
    const deleteButton = screen.getByTestId("deleteTodo");
    fireEvent.click(deleteButton);

    await waitFor(() => expect(axios.delete).toHaveBeenCalledTimes(1));
    expect(axios.delete).toHaveBeenCalledWith(
      `http://localhost:3001/todos/${testTodo.id}`
    );
  });
});
