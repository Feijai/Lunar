import PermissionBtn from "@/components/WorkSpace/PermissionBtn";
import { WorkSpaceCardProps } from "@/interfaces/workspace";
import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Col, Popover, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import WorkSpaceCardContent from "./WorkSpaceCardContent";
import { WorkSpaceCardCss } from "./style";

const WorkSpaceCard: React.FC<WorkSpaceCardProps> = ({
  title,
  permission,
  backgroundUrl,
  setWorkSpace,
  boardId,
}) => {
  const navigate = useNavigate();

  return (
    <WorkSpaceCardCss
      hoverable
      backgroundurl={backgroundUrl}
      onClick={() => {
        setWorkSpace();
        navigate(`/board/${boardId}`);
      }}
    >
      <Row style={{ marginBottom: "auto" }}>
        <Col
          style={{
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "150%",
          }}
        >
          {title}
        </Col>
      </Row>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <PermissionBtn permission={permission} id={boardId} />
        </Col>
        <Col>
          <Popover
            trigger="click"
            placement="bottomRight"
            arrow={false}
            content={<WorkSpaceCardContent boardId={boardId} />}
          >
            <Button
              icon={<EllipsisOutlined />}
              type={"text"}
              style={{ color: "white" }}
              className="EllipsisOutlined"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Popover>
        </Col>
      </Row>
    </WorkSpaceCardCss>
  );
};

export default WorkSpaceCard;
