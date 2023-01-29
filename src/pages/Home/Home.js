import { Form, Table } from "antd";
import React from "react";
import AppDatePicker from "../../components/AppDatePicker/AppDatePicker";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import { Deliveries } from "../../utilis/Deliveries";
import "./Home.css";

function Home() {
  const columns = [
    {
      title: "Customer ID",
      dataIndex: "customer_id",
      key: "customer_id",
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      key: "customer_name",
    },
    {
      title: "Pick Up Location",
      dataIndex: "pick_up",
      key: "pick_up",
    },
    {
      title: "Drop Off Location",
      dataIndex: "drop_off",
      key: "drop_off",
    },
  ];

  const data = Deliveries.map((d, index) => {
    return {
      key: d.customer_id + index,
      ...d,
    };
  });

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <DashboardLayout>
      <div className="sections">
        <div className="deliveries">
          <h3 className="title">Deliveries</h3>
          <div className="delivery-data">
            <Table
              pagination={{ pageSize: 5 }}
              scroll={{ x: 400 }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </div>
        <div className="planner">
          <h3 className="title">Planner</h3>
          <div className="planner-form">
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              id="form_group"
            >
              <AppDatePicker
                name={"date"}
                placeholder={"Date"}
                errorMessage={"Please select date!"}
              />
              <TextInput
                name={"slot1"}
                placeholder={"Slot 1"}
                errorMessage={"Please enter Slot 1!"}
              />
              <TextInput
                name={"slot2"}
                placeholder={"Slot 2"}
                errorMessage={"Please enter Slot 2!"}
              />
              <TextInput
                name={"slot3"}
                placeholder={"Slot 3"}
                errorMessage={"Please enter Slot 3!"}
              />
              <TextInput
                name={"slot4"}
                placeholder={"Slot 4"}
                errorMessage={"Please enter Slot 4!"}
              />
              <Button name={"Book Slot"} cssClass={"!px-5 mt-2"} />
            </Form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Home;
