import { API_URL } from "@/lib/utils";
import { Product } from "@/types/types";

const URL = `${API_URL}/product`;

const getAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(URL);

  return response.json();
};

export default getAllProducts;
