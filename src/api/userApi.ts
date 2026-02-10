import axios from "axios";
import type { User } from "../types/user";

const API = axios.create({
  baseURL: "https://698ac6346c6f9ebe57ba916f.mockapi.io/react-user-crud/users",
});

export const getUsers = () => API.get<User[]>("/");
export const createUser = (user: User) => API.post("/", user);
export const updateUser = (id: number, user: User) => API.put(`/${id}`, user);
export const deleteUser = (id: number) => API.delete(`/${id}`);
export const getUserById = (id: number) => API.get<User>(`/${id}`);
