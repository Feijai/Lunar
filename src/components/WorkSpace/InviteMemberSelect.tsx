import { searchLunarMemberApi } from "@/api/search";
import { useApi } from "@/hooks/useApiHook";
import { List, Row, Select, Spin } from "antd";
import { debounce } from "lodash";
import AvatarCustom from "../AvatarCustom";

const InviteMemberSelect: React.FC<{
  organizationId?: string;
  selectedUsers: { userIdList: string[] };
  setSelectedUsers: Function;
}> = ({ organizationId, selectedUsers, setSelectedUsers }) => {
  const [searchMemberResult, loading, callSearchMemberApi] =
    useApi(searchLunarMemberApi);

  const onSearch = debounce(async (value: string) => {
    if (value.length >= 1) {
      await callSearchMemberApi({
        query: value,
        organizationId,
      });
    }
  }, 800);

  const filteredUsers = searchMemberResult?.result.filter(
    (user) => !selectedUsers.userIdList.includes(user._id)
  );

  const handleSelectChange = (values: string[]) => {
    const userIdList = values;
    setSelectedUsers({ userIdList });
  };

  return (
    <Select
      mode="multiple"
      showSearch
      style={{ height: "auto" }}
      placeholder="請輸入姓名或電子郵件"
      filterOption={false}
      onSearch={onSearch}
      loading={loading}
      notFoundContent={
        loading ? (
          <Row justify={"center"} style={{ padding: "8px" }}>
            <Spin />
          </Row>
        ) : (
          searchMemberResult?.result.length === 0 && (
            <p style={{ textAlign: "center", padding: "8px" }}>
              這個人似乎尚未註冊 Lunar。
            </p>
          )
        )
      }
      onChange={handleSelectChange}
      optionLabelProp="email"
    >
      {filteredUsers?.map((user) => (
        <Select.Option key={user._id} value={user._id} email={user.email}>
          <List itemLayout="horizontal">
            <List.Item>
              <List.Item.Meta
                avatar={
                  <AvatarCustom username={user.name} imgUrl={user.avatar} />
                }
                title={user.name}
                description={user.email}
              />
            </List.Item>
          </List>
        </Select.Option>
      ))}
    </Select>
  );
};
export default InviteMemberSelect;
