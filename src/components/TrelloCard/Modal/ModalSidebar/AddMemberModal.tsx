import { searchLunarMemberApi } from "@/api/search";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Input, List, message } from "antd";
import { debounce } from "lodash";
import { ChangeEvent, useState } from "react";
import { AddMemberModalStyled } from "./style";
import type { UserProps } from "@/interfaces/user";
import { useCardModalContext } from "@/context/CardModalContext";
import { addCardMemberApi } from "@/api/cards";

const AddMemberModal: React.FC<{
  setIsOpenAddMember: Function;
  style?: any;
}> = ({ setIsOpenAddMember, style }) => {
  const { cardData, setCardData } = useCardModalContext();
  const [resultMember, setResultMember] = useState<UserProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    if (e.target.value.length > 1) {
      await searchLunarMemberApi({ query: e.target.value }).then((res) => {
        setResultMember(res.result);
      });
    }
    setIsLoading(false);
  }, 800);

  const handleAddCardMember = async (member: UserProps) => {
    const cardId = cardData?._id;
    if (cardId) {
      await addCardMemberApi({ cardId, userIdList: [member._id] }).then(
        (result) => {
          if (result.status === "success") {
            message.success(`加入成功`);
            setCardData(result.result);
          }
        }
      );
    }
    setIsOpenAddMember(false);
  };

  return (
    <AddMemberModalStyled style={{ ...style }}>
      <Card
        title="成員"
        extra={
          <Button
            className="ant-close"
            icon={<CloseOutlined style={{ fontSize: "12px" }} />}
            onClick={() => setIsOpenAddMember(false)}
          />
        }
        size={"small"}
        style={{ width: "auto" }}
      >
        <Input
          placeholder="搜尋成員"
          onChange={(e) => handleSearch(e)}
          prefix={<SearchOutlined />}
        />
        {resultMember && (
          <List
            className="search-list-items"
            itemLayout="horizontal"
            dataSource={resultMember}
            loading={isLoading}
            locale={{ emptyText: "這個人似乎尚未註冊 Lunar。" }}
            renderItem={(member) => (
              <List.Item
                className="search-list-item"
                key={member._id}
                onClick={() => handleAddCardMember(member)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={member.avatar} />}
                  title={member.name}
                  description={member.email}
                />
              </List.Item>
            )}
          />
        )}

        <Col className="board-member-list">
          <p>卡片成員</p>
          <List
            itemLayout="horizontal"
            dataSource={cardData?.member}
            locale={{ emptyText: "尚無成員" }}
            renderItem={(member) => (
              <List.Item key={member.userId._id}>
                <List.Item.Meta
                  style={{ alignItems: "center" }}
                  avatar={<Avatar src={member.userId.avatar} />}
                  title={member.userId.name}
                />
              </List.Item>
            )}
          />
        </Col>
      </Card>
    </AddMemberModalStyled>
  );
};

export default AddMemberModal;