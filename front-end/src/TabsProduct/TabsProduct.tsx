import React, { useState } from 'react';
import { Tabs, Button, Modal, Card, List, Form, Input, Rate, Typography } from 'antd';
import type { TabsProps } from 'antd';
import './TabsProduct.css';
import Feedbacks from '../Feedback/Feedback';

const { Title } = Typography;

const feedbackData = [
  { feedback: 'Nice product I really love it', name: 'Cak Mukidi', rating: 5 },
  { feedback: 'Very effective product', name: 'Jane Doe', rating: 4 },
  { feedback: 'Good value for money', name: 'John Smith', rating: 4 },
];



const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: <ButtonPop />,
  },
  {
    key: '2',
    label: 'ENGRAIS',
    children: <ButtonPop />,
  },
  {
    key: '3',
    label: 'ENGRAIS SOLIDES',
    children: <ButtonPop />,
  },
];

function TabsProduct() {
  return (
    <div className="tabs-product">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default TabsProduct;
