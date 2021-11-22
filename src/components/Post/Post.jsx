import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPostAction, xoaPostAction } from "../../redux/Action/PostAction";
import { Table } from "antd";
import { NavLink } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { history } from "../../App";

function Post(props) {
  const { post } = useSelector((state) => state.PostReducer);
  const dispatch = useDispatch();
  console.log(post);
  console.log(props);
  useEffect(() => {
    dispatch(layDanhSachPostAction());
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => b.id - a.id,
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
    },
    {
      title: "Name post",
      dataIndex: "title",
      render: (text, post) => {
        return (
          <Fragment>
            <span>{post.title}</span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Detail Post",
      dataIndex: "body",
      render: (text, post) => {
        return (
          <Fragment>
            {post.body.length > 200 ? (
              <span>{post.body.substr(0, 200)}...</span>
            ) : (
              <span>{post.body}</span>
            )}
          </Fragment>
        );
      },
    },
    {
      title: "",
      dataIndex: "hinhAnh",
      render: (text, post) => {
        return (
          <Fragment>
            <div className="flex justify-center items-center">
              <div>
                <button
                  to={`/post/detail/${post.id}`}
                  className=" cursor-pointer mr-5 bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    history.push(`/post/detail/${post.id}`);
                  }}
                >
                  View
                </button>
              </div>
              <div>
                <NavLink to={`/post/edit/${post.id}`}>
                  <EditOutlined
                    style={{
                      fontSize: "24px",
                      color: "blue",
                      marginRight: "20px",
                    }}
                  />
                </NavLink>
              </div>
              <div>
                <span
                  className=" cursor-pointer"
                  onClick={() => {
                    // gọi action xóa phim
                    if (
                      window.confirm(
                        "Bạn có chắc muốn xóa post " + post.id + " không?"
                      )
                    ) {
                      dispatch(xoaPostAction(post.id));
                    }
                  }}
                >
                  <DeleteOutlined style={{ fontSize: "24px", color: "red" }} />
                </span>
              </div>
            </div>
          </Fragment>
        );
      },
    },
  ];
  const data = post;
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <button className="p-3 bg-green-500 text-white mb-5 rounded" onClick={()=>{
        history.push("/post/addpost")
      }}>
        CREATE POST
      </button>
      <Table columns={columns} dataSource={data} rowKey={"id"} />
    </div>
  );
}

export default Post;
