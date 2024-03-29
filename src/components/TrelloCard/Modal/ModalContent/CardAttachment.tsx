import React, { useEffect, useState } from "react";
import { Col, Modal, Upload, UploadProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getBase64 } from "@/utils/func";
import { deleteAttachmentAction, newAttachmentAction } from "@/redux/cardSlice";
import { useAppDispatch } from "@/hooks";
import { SectionHeaderStyled } from "./style";
import { useParamCard } from "@/hooks/useParamCard";
import openNotification from "@/utils/openNotification";

const CardAttachment: React.FC = () => {
  const cardData = useParamCard();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadProps["fileList"]>([]);

  useEffect(() => {
    const _list = cardData?.attachment?.map(({ _id, filename, dirname }) => ({
      uid: _id,
      name: filename,
      url: dirname,
    }));
    setFileList(_list || []);
  }, [cardData]);

  const dispatch = useAppDispatch();

  return (
    <>
      <SectionHeaderStyled align="middle" gutter={8}>
        <Col flex="none">
          <h3>附件</h3>
        </Col>
      </SectionHeaderStyled>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={async ({ url, preview, originFileObj }) => {
          if (!url && !preview && originFileObj) {
            preview = await getBase64(originFileObj);
          }
          setPreviewImage(url || `${preview}`);
          setPreviewOpen(true);
        }}
        onChange={({ file, fileList }) => {
          if (file.status === "done") {
            openNotification({
              message: `${file.name} 上傳成功`,
            });
          }
          if (file.status === "error") {
            openNotification({
              message: `${file.name} 上傳失敗`,
              success: false,
            });
          }
          setFileList(fileList);
        }}
        customRequest={async (options) => {
          if (typeof options.file === "string" || !cardData) {
            options.onError?.(new Error("上傳錯誤"));
            return;
          }

          await dispatch(
            newAttachmentAction({
              file: options.file,
              filename: `${options.filename}`,
              cardId: cardData._id,
            })
          );

          options.onSuccess?.("");
        }}
        onRemove={async (file) => {
          if (!cardData) {
            return false;
          }
          await dispatch(
            deleteAttachmentAction({
              cardId: cardData?._id,
              attachmentId: file.uid,
            })
          );
        }}
      >
        {fileList && fileList.length <= 8 && <PlusOutlined />}
      </Upload>
      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default CardAttachment;
