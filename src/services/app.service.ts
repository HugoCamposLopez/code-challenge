import APIClient from ".";
import { PropertiesI } from "../components/Molecules/CardItem/CardItem";

export const getMovements = async (): Promise<PropertiesI[]> => {
  const response = await APIClient.get("/products");
  const data = response.data as any[]; 
  const filteredData = data.map((item: PropertiesI) => {
    const filteredItem: PropertiesI = {
      createdAt: item.createdAt,
      product: item.product,
      points: item.points,
      image: item.image,
      is_redemption: item.is_redemption,
      id: item.id,
    };
    return filteredItem;
  });
  return filteredData;
}