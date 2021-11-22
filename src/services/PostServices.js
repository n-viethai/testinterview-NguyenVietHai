import { baseService } from "./baseService";

class PostServices extends baseService {
  layDanhSachPostServices = () => {
    return this.get("https://jsonplaceholder.typicode.com/posts");
  };
  layChiTietPostServices = (id) => {
    return this.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  };
  layCommentServices = (id) => {
    return this.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
  };

  xoaPostServices = (id) => {
    return this.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  };
  themPostServices = (data) => {
    return this.post("https://jsonplaceholder.typicode.com/posts", data);
  };

  EditPostServices = (id, data) => {
    return this.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
  };
}
const PstServices = new PostServices();
export const { layDanhSachPostServices } = PstServices;
export const { layChiTietPostServices } = PstServices;
export const { layCommentServices } = PstServices;
export const { xoaPostServices } = PstServices;
export const { themPostServices } = PstServices;
export const { EditPostServices } = PstServices;
