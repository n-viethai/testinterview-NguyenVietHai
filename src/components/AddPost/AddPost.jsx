import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import { themPostAction } from "../../redux/Action/PostAction";

function AddPost() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userId: "",
      title: "",
      body: "",
    },
    onSubmit: (values) => {
      //   console.log({ values });
      //  gọi API đưa formdata về backend
      dispatch(themPostAction(values));
    },
  });
  return (
    <div className="max-w-screen-xl mx-auto">
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "default",
        }}
        size="default"
        style={{ padding: "20px 0" }}
      >
        <h1 className="text-2xl ml-5 mb-8">ADD POST</h1>
        <Form.Item label="User ID">
          <Input name="userId" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Title">
          <Input name="title" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Body">
          <Input name="body" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="bg-green-500 py-2 px-8 text-white font-semibold hover:bg-green-700 transition-all ease-in-out duration-300 rounded"
          >
            ADD
          </button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddPost;
