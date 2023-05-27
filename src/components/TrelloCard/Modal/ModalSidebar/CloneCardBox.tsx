import React, { useState } from "react";
import { Button, Cascader, Form, Popover, Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getCloneCardOptions } from "@/utils/func";
import { postCloneCardApi } from "@/api/cards";
import { useCardModalContext } from "@/context/CardModalContext";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getOrganizationsAction } from "@/redux/actions/OrganizationAction";

const CloneCardBox: React.FC = () => {
  const { cardData } = useCardModalContext();
  const [form] = Form.useForm<{
    name: string;
    cascader: [string, string, string, number];
  }>();
  const options = getCloneCardOptions(
    useAppSelector((state) => state.user.organization)
  );
  const [componentState, setComponentState] = useState({
    isLoading: false,
    isPopoverOpen: false,
  });

  const dispatch = useAppDispatch();

  return (
    <Popover
      placement="bottom"
      trigger="click"
      open={componentState.isPopoverOpen}
      onOpenChange={(visible) => {
        setComponentState({
          isLoading: false,
          isPopoverOpen: visible,
        });
      }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          複製卡片
        </div>
      }
      content={
        <Form
          layout="vertical"
          form={form}
          onFinish={({ name, cascader: [, boardId, listId, position] }) => {
            if (!cardData) {
              return;
            }
            setComponentState((state) => ({
              ...state,
              isLoading: true,
            }));

            postCloneCardApi({
              name,
              boardId,
              listId,
              sourceCardId: cardData.id,
              position: `${position}`,
            })
              .then(() => {
                // 異步執行
                getOrganizationsAction()(dispatch);
              })
              .finally(() => {
                setComponentState({
                  isPopoverOpen: false,
                  isLoading: false,
                });
              });
          }}
        >
          <Form.Item
            label="標題"
            name="name"
            rules={[
              {
                required: true,
                message: "請輸入標題!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="複製到..."
            name="cascader"
            rules={[
              {
                required: true,
                message: "請選擇位置!",
              },
            ]}
          >
            <Cascader options={options} placement={"bottomRight"} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={componentState.isLoading}
            >
              建立卡片
            </Button>
          </Form.Item>
        </Form>
      }
    >
      <a className="button-link">
        <span style={{ marginRight: "6px" }}>
          <CopyOutlined />
        </span>
        <span>複製</span>
      </a>
    </Popover>
  );
};

export default CloneCardBox;
