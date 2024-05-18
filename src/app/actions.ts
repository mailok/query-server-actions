"use server";

export async function getTodos() {
  console.log("Fetching todos...");
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return [
    { id: 1, text: `Buy some milk, getTime: ${new Date().getTime()}` },
    { id: 2, text: "Pick up the kids" },
    { id: 3, text: "Do laundry" },
  ];
}
