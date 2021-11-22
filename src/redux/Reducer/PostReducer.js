const stateDefault = {
  post: [
    {
      userId: 10,
      id: 100,
      title: "at nam consequatur ea labore ea harum",
      body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
    },
  ],
  postDetail: {},
  comment: [],
};

export const PostReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_POST": {
      state.post = action.post;
      return { ...state };
    }
    case "LAY_CHI_TIET_POST": {
      state.postDetail = action.postDetail;
      return { ...state };
    }
    case "LAY_COMMENT": {
      state.comment = action.comment;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
