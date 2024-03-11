import axios from "axios";

const url = "http://localhost:3001";

export const getTodos = async () => {
  try {
    const response = await axios.get(`${url}/todos`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};


export const getTodo = async (id) => {
  try {
    const response = await axios.get(`${url}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const createTodo = async (todo) => {
  try {
    const response = await axios.post(`${url}/todos`, todo);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
