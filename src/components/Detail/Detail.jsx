import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import {
  layChiTietPostAction,
  layCommentAction,
} from "../../redux/Action/PostAction";

function Detail(props) {
  const { postDetail, comment } = useSelector((state) => state.PostReducer);
  console.log(comment);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layChiTietPostAction(props.match.params.id));
    dispatch(layCommentAction(props.match.params.id));
  }, []);
  const renderComment = () => {
    return comment.map((item, index) => {
      return (
        <div key={index} className="bg-gray-300 p-2 mt-3 rounded">
          <div className="flex ">
            <div>
              <img
                className="block rounded-full"
                style={{ width: "50px", height: "50px" }}
                src={`https://picsum.photos/id/${index}/1000/1000`}
                alt="..."
              />
            </div>
            <div className="ml-5">
              <p className="text-base font-semibold">
                {item.name} <span>({item.email})</span>{" "}
              </p>
            </div>
          </div>
          <p>{item.body}</p>
        </div>
      );
    });
  };
  return (
    <div className=" max-w-screen-lg mx-auto mt-5 border border-gray-600 rounded p-5">
        <button className="bg-green-500 px-2 py-3 text-xl text-white mb-5 rounded" onClick={()=>{
            history.push("/")
        }}>
            Home
        </button>
      <div className="border border-gray-500 p-5 rounded">
        <span className="text-3xl inline-block mb-5">Post {postDetail.id}</span>
        <span className="text-3xl inline-block mb-5">
          {" "}
          - post by user {postDetail.userId}
        </span>
        <p className="text-2xl font-semobold">{postDetail.title}</p>
        <p className="text-base">{postDetail.body}</p>
      </div>
      <div className="px-10">{renderComment()}</div>
    </div>
  );
}

export default Detail;
