import {request} from "@@/exports";

export async function foodListApi(options?: { [key: string]: any }) {
  return request<FoodAPI.FoodList>('/api/v1/food/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {},
    ...(options || {}),
  });
}
