import React from "react";
import { Button, ConfigProvider, message, notification } from "antd";
import { BorderBottomOutlined} from "@ant-design/icons";
import type { NotificationPlacement } from "antd/es/notification/interface";

// props: any ->  If props is set to any, it will always request
function MyAntdLayout(props) {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  const [api, notificationContextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5A54F9",
          borderRadius: 2,
        },
      }}
    >
      {notificationContextHolder}
      {contextHolder}
      <Button type="primary" onClick={info}>Click Message!</Button>
      <Button
          type="primary"
          onClick={() => openNotification('bottom')}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
        {props.children}
    </ConfigProvider>
  );
}


export default  MyAntdLayout
