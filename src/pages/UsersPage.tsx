import { useEffect, useState } from "react";
import {
  Button,
  Spin,
  message,
  Layout,
  Typography,
  Row,
  Col,
  Card,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import { getUsers, deleteUser } from "../api/userApi";
import type { User } from "../types/user";

const { Title } = Typography;
const { Content } = Layout;

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    setLoading(true);
    const res = await getUsers();
    setUsers(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    message.success("User deleted");
    fetchUsers();
  };

  if (loading) return <Spin />;

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Content style={{ padding: "40px 24px" }}>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 24 }}
        >
          <Col xs={12} sm={12} md={16}>
            <Title className="responsive-title" level={3} style={{ margin: 0 }}>
              User Management
            </Title>
          </Col>

          <Col xs={12} sm={12} md={8} style={{ textAlign: "right" }}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="responsive-button"
              onClick={() => navigate("/add")}
            >
              Add User
            </Button>
          </Col>
        </Row>

        <Card>
          <UserTable
            users={users}
            onEdit={(id: number) => navigate(`/edit/${id}`)}
            onDelete={handleDelete}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default UsersPage;
