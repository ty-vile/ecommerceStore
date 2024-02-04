import { API_URL } from "@/lib/utils";
import { Category } from "@/types/types";

const URL = `${API_URL}/product/category`;

const getAllCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL);

  return response.json();
};

export default getAllCategories;
