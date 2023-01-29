import * as React from "react";
import { Form, Input } from "antd";

const TextInput = ({ name, placeholder, errorMessage }) => {
  return (
    <Form.Item
      name={name}
      className="w-full"
      rules={[
        {
          required: true,
          message: errorMessage,
        },
      ]}
    >
      <Input className="text-input" type={"text"} placeholder={placeholder} />
    </Form.Item>
  );
};

export default TextInput;
