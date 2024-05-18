"use client";

import { useTodos } from "./useTodos";

export function ClientComponent() {
  const { data, isLoading, error, refetch } = useTodos();

  return (
    <div className='border-dashed border-2 flex flex-col gap-4'>
      <h1>useQuery with Server Action dont refetch on client</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {data?.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      )}
      <button onClick={() => refetch()}>refetch button</button>
    </div>
  );
}
