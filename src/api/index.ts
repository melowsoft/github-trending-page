import axios from "axios"

export const getRepositories = async () => {
  try {
    const response = await axios.get("/repositories")
      return response.data
  } catch (err) {
      throw new Error(err);
  }
}
export const getDevelopers = async () => {
  try {
    const response = await axios.get("/developers")
      return response.data
  } catch (err) {
      throw new Error(err);
  }
}