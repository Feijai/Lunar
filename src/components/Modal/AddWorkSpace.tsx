import React, { useState } from "react";
import { AddWorkSpaceCss } from "./style";
import { Button, Form, Input } from "antd";
import { NewOrganizationFormProps } from "@/interfaces/organization";
import { newOrganizationAction } from "@/redux/organizationSlice";
import { useAppDispatch } from "@/hooks";
import InviteMemberSelect from "../WorkSpace/InviteMemberSelect";

const AddWorkSpace: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const [form] = Form.useForm<NewOrganizationFormProps>();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<{ userIdList: string[] }>({
    userIdList: [],
  });
  const dispatch = useAppDispatch();

  const onFinish = async (values: NewOrganizationFormProps) => {
    setButtonLoading(true);

    dispatch(
      newOrganizationAction({
        name: values.name,
        userIdList: selectedUsers.userIdList,
      })
    ).finally(() => {
      setButtonLoading(false);
      setOpen(false);
      form.resetFields();
    });
  };
  return (
    <AddWorkSpaceCss open={open} onCancel={() => setOpen(false)} footer={null}>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <div>
          <h2>讓我們開始打造工作區吧</h2>
          <p>讓大家更容易在同一位置存取看板，以提高你的工作效率。</p>
        </div>
        <Form.Item label="工作區名稱" name="name">
          <Input />
        </Form.Item>
        <Form.Item name="invite" label="邀請你的團隊" className="invite">
          <InviteMemberSelect
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={buttonLoading}>
            繼續
          </Button>
        </Form.Item>
      </Form>
    </AddWorkSpaceCss>
  );
};

export default AddWorkSpace;
