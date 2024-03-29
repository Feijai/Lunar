import React, { useState } from "react";
import { Avatar, Button, Col, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useParamCard } from "@/hooks/useParamCard";
import { isDarkColor } from "@/utils/func";
import LabelModal from "../ModalSidebar/LabelModal";
import { SectionHeaderStyled } from "./style";

const CardLabel: React.FC = () => {
  const cardData = useParamCard();

  const [isOpenLabel, setIsOpenLabel] = useState(false);

  const labelAvatarGroup = cardData?.label.map(({ name, color, _id }) => (
    <Tooltip key={_id} title={name} placement="top">
      <Avatar
        key={_id}
        shape="square"
        style={{
          backgroundColor: color,
          color: isDarkColor(color) ? "white" : "black",
        }}
      >
        {name}
      </Avatar>
    </Tooltip>
  ));

  return (
    <Col span={12}>
      <SectionHeaderStyled align="middle" gutter={8}>
        <Col flex="none">
          <h3>標籤</h3>
        </Col>
      </SectionHeaderStyled>
      <Avatar.Group>
        {labelAvatarGroup}
        <Button
          shape="circle"
          icon={<PlusOutlined />}
          onClick={() => setIsOpenLabel(true)}
        />
        {isOpenLabel && (
          <LabelModal setIsOpenLabel={setIsOpenLabel} style={{ top: "64px" }} />
        )}
      </Avatar.Group>
    </Col>
  );
};

export default CardLabel;
