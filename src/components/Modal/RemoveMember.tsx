import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form } from "antd";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { OrganizationMemberProps } from "@/interfaces/organization";
import {
  deleteOrganizationMemberAction,
  removeUserMember,
} from "@/redux/organizationSlice";
import { selectUser } from "@/redux/userSlice";
import { MemberModalCss } from "./style";

const RemoveMember: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMember: OrganizationMemberProps | null;
}> = ({ open, setOpen, selectedMember }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { workSpaceId } = useParams();

  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    if (!workSpaceId || !selectedMember) {
      return;
    }
    setLoading(true);

    try {
      await dispatch(
        deleteOrganizationMemberAction({
          organizationId: workSpaceId,
          memberId: selectedMember.userId._id,
        })
      );
      if (selectedMember.userId._id === user._id) {
        dispatch(removeUserMember({ organizationId: workSpaceId }));
        navigate("/");
      }
    } catch (error) {}

    setLoading(false);
    setOpen(false);
  };
  return (
    <MemberModalCss
      title={<p style={{ textAlign: "center" }}>移除或停用成員</p>}
      width={332}
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="exit">
          <Button
            type="text"
            htmlType="submit"
            loading={loading}
            style={{
              width: "100%",
              height: "80px",
              textAlign: "left",
              margin: "8px 0px",
            }}
            block
          >
            <p
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {selectedMember?.role === "manager"
                ? "離開工作區"
                : "從工作區中移除"}
            </p>
            移除所有對此工作區的存取動作。
          </Button>
        </Form.Item>
      </Form>
    </MemberModalCss>
  );
};
export default RemoveMember;
