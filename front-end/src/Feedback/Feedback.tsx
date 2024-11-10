import React from 'react';
import { Card, List, Rate, Typography } from 'antd';
import './Feedback.css';

const { Text } = Typography;

const Feedbacks = ({ data }) => {
  return (
    <div className="feedbacks-section">
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card className="feedback-card">
              <Text>{item.feedback}</Text>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                <Text className="feedback-author">{item.name}</Text>
                <Rate disabled defaultValue={item.rating} />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Feedbacks;
