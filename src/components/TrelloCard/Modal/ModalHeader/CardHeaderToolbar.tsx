import React from "react";
import { Col, Row } from "antd";
import {
  EyeOutlined,
  InboxOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useParamCard } from "@/hooks/useParamCard";
import { selectListByCardId } from "@/redux/boardSlice";
import { addCardMemberAction } from "@/redux/cardSlice";
import { selectUser } from "@/redux/userSlice";
import openNotification from "@/utils/openNotification";
import MoveCard from "../ModalSidebar/MoveCard";
import { CardHeaderToolbarStyled } from "./style";

const CardHeaderToolbar: React.FC = () => {
  const cardData = useParamCard();
  const dispatch = useAppDispatch();
  const currentList = useAppSelector(selectListByCardId(cardData?._id));
  const user = useAppSelector(selectUser);

  const isInMember = cardData?.member.find(
    ({ userId }) => userId._id === user._id
  );

  return (
    <CardHeaderToolbarStyled>
      <Row align="middle" gutter={24}>
        <Col flex="none" className="col">
          <InboxOutlined className="icon" />
          <MoveCard>
            <p>
              在「<u>{currentList?.name}</u>」列表中
            </p>
          </MoveCard>
        </Col>
        {!isInMember && (
          <Col flex="none" className="col">
            <UsergroupAddOutlined className="icon" />
            <p
              onClick={async () => {
                if (!cardData) {
                  return;
                }
                await dispatch(
                  addCardMemberAction({
                    cardId: cardData?._id,
                    userIdList: [user._id],
                  })
                );
                openNotification({
                  message: `加入成功`,
                });
              }}
            >
              加入
            </p>
          </Col>
        )}
        <Col flex="none" className="col">
          <EyeOutlined className="icon" />
          <p>追蹤</p>
        </Col>
      </Row>
    </CardHeaderToolbarStyled>
  );
};

export default CardHeaderToolbar;
