import axios from "axios";
import type { User } from "../types/user";

const API = axios.create({
  baseURL: "http://localhost:4000/users",
});

export const getUsers = () => API.get<User[]>("/");
export const createUser = (user: User) => API.post("/", user);
export const updateUser = (id: number, user: User) => API.put(`/${id}`, user);
export const deleteUser = (id: number) => API.delete(`/${id}`);
export const getUserById = (id: number) => API.get<User>(`/${id}`);
