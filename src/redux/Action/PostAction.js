import { history } from "../../App";
import {
  EditPostServices,
  layChiTietPostServices,
  layCommentServices,
  layDanhSachPostServices,
  themPostServices,
  xoaPostServices,
} from "../../services/PostServices";

export const layDanhSachPostAction = () => {
  return async (dispatch) => {
    try {
      const result = await layDanhSachPostServices();
      dispatch({
        type: "LAY_DANH_SACH_POST",
        post: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const layChiTietPostAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await layChiTietPostServices(id);
      // console.log(result.data);
      dispatch({
        type: "LAY_CHI_TIET_POST",
        postDetail: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const layCommentAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await layCommentServices(id);
      // console.log(result)
      dispatch({
        type: "LAY_COMMENT",
        comment: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const xoaPostAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await xoaPostServices(id);
      console.log(result);
      // dispatch({
      //   type: "LAY_COMMENT",
      //   comment: result.data
      // });
    } catch (error) {
      console.log(error);
    }
  };
};

export const themPostAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await themPostServices(data);
      console.log(result);
      // localStorage.setItem("NEW_POST", JSON.stringify(result.data));
      alert("Thêm post thành công!")
      history.push("/")
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPostAction = (id,data) => {
  return async (dispatch) => {
    try {
      const result = await EditPostServices(id,data);
      console.log(result);
      // localStorage.setItem("NEW_POST", JSON.stringify(result.data));
      alert("Update post thành công!")
      history.push("/")
    } catch (error) {
      console.log(error);
    }
  };
};

