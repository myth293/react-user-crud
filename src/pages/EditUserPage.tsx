import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { message } from "antd";
import UserForm from "../components/UserForm";
import { createUser, updateUser, getUserById } from "../api/userApi";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      getUserById(Number(id)).then((res) => setInitialValues(res.data));
    }
  }, [id]);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    if (id) {
      await updateUser(Number(id), values);
      message.success("User updated");
    } else {
      await createUser(values);
      message.success("User created");
    }
    setLoading(false);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: 24 }}>
      <UserForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        loading={loading}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default EditUserPage;
