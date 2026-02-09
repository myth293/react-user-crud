import { Form, Input, Button, Card } from "antd";
import { userFormSchema } from "../config/userFormSchema";
import { useEffect } from "react";

interface Props {
  initialValues?: any;
  onSubmit: (values: any) => void;
  loading: boolean;
  onCancel: () => void;
}

const UserForm = ({ initialValues, onSubmit, loading, onCancel }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  return (
    <Card style={{ maxWidth: 600, margin: "auto" }}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {userFormSchema.map((field: any) => (
          <Form.Item
            key={field.name}
            name={field.name}
            label={field.label}
            rules={field.rules}
          >
            <Input />
          </Form.Item>
        ))}

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ marginRight: 12 }}
        >
          {initialValues ? "Update" : "Submit"}
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </Form>
    </Card>
  );
};

export default UserForm;
