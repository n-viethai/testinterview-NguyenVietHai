import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import {
  editPostAction,
  layChiTietPostAction,
} from "../../redux/Action/PostAction";
const { TextArea } = Input;

function EditPost(props) {
  const dispatch = useDispatch();
  const { postDetail } = useSelector((state) => state.PostReducer);
  useEffect(() => {
    dispatch(layChiTietPostAction(props.match.params.id));
  }, [dispatch]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userId: postDetail.userId,
      title: postDetail.title,
      body: postDetail.body,
      id: postDetail.id,
    },
    onSubmit: (values) => {
      //   console.log({ values });
      //  gọi API đưa formdata về backend
      dispatch(editPostAction(props.match.params.id, values));
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
        <h1 className="text-2xl ml-5 mb-8">EDDIT POST</h1>
        <Form.Item label="User ID">
          <Input
            name="userId"
            onChange={formik.handleChange}
            value={formik.values.userId}
          />
        </Form.Item>
        <Form.Item label="id">
          <Input
            name="id"
            onChange={formik.handleChange}
            value={formik.values.id}
          />
        </Form.Item>
        <Form.Item label="Title">
          <Input
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </Form.Item>
        <Form.Item label="Body">
          <TextArea
            rows="5"
            name="body"
            onChange={formik.handleChange}
            value={formik.values.body}
          />
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

export default EditPost;
