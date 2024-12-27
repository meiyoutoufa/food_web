import { Card, List } from 'antd';
import React, {useEffect, useState} from 'react';
import {foodListApi} from "@/services/ant-design-pro/foodApi";

const FoodList: React.FC = () => {

  const [currentRow, setCurrentRow] = useState<FoodAPI.FoodList>();

  const handleFoodList = async () =>{
    let res = await foodListApi();
    setCurrentRow(res);
  }

  useEffect(() => {
    handleFoodList();
  }, []);

  // const data = [
  //   {
  //     title: 'Title 1',
  //     name: 'title 1',
  //     description: 'description 1',
  //   },
  //   {
  //     title: 'Title 2',
  //     name: 'title 1',
  //     description: 'description 1',
  //   },
  //   {
  //     title: 'Title 3',
  //     name: 'title 1',
  //     description: 'description 1',
  //   },
  //   {
  //     title: 'Title 4',
  //     name: 'title 1',
  //     description: 'description 1',
  //   },
  // ];

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={currentRow}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>{item.description}</Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default FoodList;
