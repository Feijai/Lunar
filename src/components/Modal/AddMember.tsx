import React, { useState } from "react";
import { AddMemberCss } from "./style";
import { OrganizationMemberProps } from "@/interfaces/organization";
import { Avatar, Button, Divider, Form, Select } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import CopyInviteLinkBtn from "../WorkSpace/CopyInviteLinkBtn";
import InviteMemberSelect from "../WorkSpace/InviteMemberSelect";
import { useApi } from "@/hooks/useApiHook";
import { addBoardMembersApi } from "@/api/boards";
import { useParams } from "react-router";
interface AddMemberProps {
  member: OrganizationMemberProps[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  boardInviteLink: string;
}

const UserList: React.FC<OrganizationMemberProps> = (props) => {
  const {
    role,
    userId: { name, avatar },
  } = props;
  return (
    <div className="d-space" style={{ marginBottom: "12px" }}>
      <div className="d-flex">
        <Avatar src={avatar} style={{ width: "40px", height: "40px" }} />
        <div style={{ marginLeft: "8px" }}>
          <div style={{ color: "var(--black23)" }}>{name}</div>
          <div
            style={{ fontSize: "12px", color: "var(--gray9f)" }}
          >{`@${name}`}</div>
        </div>
      </div>
      <div className="d-flex" style={{ alignItems: "center" }}>
        <Select defaultValue={role} style={{ width: "100px" }} size="large">
          <Select.Option value="master">管理員</Select.Option>
          <Select.Option value="user">成員</Select.Option>
        </Select>
        <Button
          shape="circle"
          danger
          style={{
            width: "24px",
            height: "24px",
            padding: 0,
            minWidth: "auto",
            marginLeft: "8px",
          }}
          icon={<MinusOutlined />}
        />
      </div>
    </div>
  );
};
const AddMember: React.FC<AddMemberProps> = ({
  member,
  open,
  setOpen,
  boardInviteLink,
}) => {
  const [_result, loading, callApi] = useApi(addBoardMembersApi);
  const [selectedUsers, setSelectedUsers] = useState<{ userIdList: string[] }>({
    userIdList: [],
  });
  const handleCancel = () => {
    setOpen(false);
  };
  const { boardId } = useParams();

  const onFinish = async () => {
    await callApi({
      boardId: boardId!,
      userIdList: selectedUsers.userIdList,
    });

    setSelectedUsers({
      userIdList: [],
    });

    handleCancel();
  };

  return (
    <AddMemberCss open={open} footer={null} onCancel={handleCancel} width={576}>
      <div className="header">邀請看板成員</div>
      <Form onFinish={onFinish}>
        <Form.Item className="user">
          <InviteMemberSelect
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
          />
        </Form.Item>
        <Form.Item initialValue="user" className="select">
          <Select>
            <Select.Option value="master">管理員</Select.Option>
            <Select.Option value="user">成員</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="btn">
          <Button type="primary" htmlType="submit" loading={loading}>
            邀請
          </Button>
        </Form.Item>
      </Form>
      {member && member?.map((ele, idx) => <UserList {...ele} key={idx} />)}
      <Divider style={{ margin: "12px 0" }} />
      <div
        className="d-flex"
        style={{ justifyContent: "right", alignItems: "center" }}
      >
        <p>透過連結邀請新成員加入看板</p>
        <CopyInviteLinkBtn
          setOpen={setOpen}
          style={{ backgroundColor: "var(--graye9)", marginLeft: "16px" }}
          boardInviteLink={boardInviteLink}
        />
      </div>
    </AddMemberCss>
  );
};

export default AddMember;
