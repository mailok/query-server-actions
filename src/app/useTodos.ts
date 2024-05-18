import { useQuery } from "@tanstack/react-query";
import { getTodos } from "./actions";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => getTodos(),
  });
}
