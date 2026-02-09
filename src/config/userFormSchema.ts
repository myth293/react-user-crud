
export const userFormSchema = [
  {
    name: "firstName",
    label: "First Name",
    rules: [{ required: true, message: "First name is required" }],
  },
  {
    name: "lastName",
    label: "Last Name",
    rules: [{ required: true, message: "Last name is required" }],
  },
  {
    name: "phone",
    label: "Phone Number",
    rules: [
      { required: true, message: "Phone number is required" },
      { pattern: /^[0-9]{10}$/, message: "Enter valid phone number" }
    ],
  },
  {
    name: "email",
    label: "Email Address",
    rules: [
      { required: true, message: "Email is required" },
      { type: "email", message: "Invalid email" }
    ],
  }
];
