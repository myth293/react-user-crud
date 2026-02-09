import { Table, Button, Space, Popconfirm } from "antd";

const UserTable = ({ users, onEdit, onDelete }: any) => {
  const columns = [
    { title: "First Name", dataIndex: "firstName" },
    { title: "Last Name", dataIndex: "lastName" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Actions",
      render: (_: any, record: any) => (
        <Space>
          <Button onClick={() => onEdit(record.id)}>Edit</Button>
          <Popconfirm
            title="Delete user?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={users}
      scroll={{ x: 800 }}
    />
  );
};

export default UserTable;
