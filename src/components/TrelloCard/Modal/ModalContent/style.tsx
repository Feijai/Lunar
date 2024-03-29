import styled from "styled-components";
import { Layout, Row } from "antd";
import { RowProps } from "antd/lib/row";

const { Content } = Layout;

export const ModalStyle: React.CSSProperties = {
  color: "var(--modal-color)",
  background: "white",
  padding: "16px 16px 0 0",
};

export const ModalContentStyled = styled(Content)`
  .contentDescription {
    display: flex;
    align-items: center;
    font: 14px;
    line-height: 150%;
    margin: 8px;
  }
`;

export const SectionHeaderStyled = styled(Row)<RowProps>`
  align-items: center;
  color: var(--modal-color);
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 8px;

  .isShow {
    display: flex;
  }

  .isHidden {
    display: none;
  }
`;

export const SectionContentStyled = styled.div`
  margin-bottom: 16px;

  .descriptionDisplay {
    min-height: 100px;
  }

  .descriptionEmpty {
    width: 100%;
    height: 100px;
  }

  .descriptionDisplay,
  .descriptionEmpty {
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    padding: 8px 12px;
  }
`;

export const CardDateStyled = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;

  .cardDate {
    min-height: 34px;
    background-color: #e9e9e980;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;

    &:hover {
      background-color: #e9e9e9;
    }
  }

  .checkFinish {
    margin-left: 12px;
  }
`;

export const CardCommentFormStyled = styled.div`
  background-color: var(--comment-form-background);
  border-radius: 6px;
  padding: 16px;
  position: relative;
  .ant-form-item-label ::after {
    display: none;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  .ant-btn {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
`;

export const CardCommentListStyled = styled.div`
  .userName {
    color: #232323;
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
  }

  .timeText {
    color: var(--gray9f);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }

  .comment {
    color: #232323;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }

  .isShow {
    display: flex;
  }

  .isHidden {
    display: none !important;
  }
`;
