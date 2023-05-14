import styled from "styled-components";
import { Layout, Row } from "antd";
import { RowProps } from "antd/lib/row";

const { Content } = Layout;

export const ModalStyle: React.CSSProperties = {
  color: "var(--modal-color)",
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
