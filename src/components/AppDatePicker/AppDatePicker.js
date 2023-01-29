import * as React from "react";
import { Form, DatePicker } from "antd";

const AppDatePicker = ({ name, placeholder, errorMessage }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const date = new Date();
  date.setDate(date.getDate() + 7);
  const minDate = date.toISOString().split("T")[0];
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
      <DatePicker
        onChange={onChange}
        className="text-input"
        type={"text"}
        placeholder={placeholder}
        disabledDate={(d) => !d || d.isBefore(minDate)}
      />
    </Form.Item>
  );
};

export default AppDatePicker;
