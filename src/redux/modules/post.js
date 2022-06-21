import axios from "axios";

const initialState = {
  list: [],
};

const token = localStorage.getItem("token");

//Actions
const LOAD = "post/LOAD";
const ADD = "post/ADD";

//Action Creators
export function loadPost(post_list) {
    console.log(post_list);
    return { type: LOAD, post_list };
  }
  
  export function addPost(post) {
    return { type: ADD, post };
  }

  // middlewares
  export const loadPostDB = () => {
    return function (dispatch) {
      axios.get("http://localhost:5001/posts").then((response) => {
        console.log(response.data);
        dispatch(loadPost(response.data.result));
      });
    };
  };

  export const addPostDB = (post) => {
    return function (dispatch) {
      const formData = new FormData();
  
      const upload = {
        title: post.title,
        description: post.description
      };
  
      console.log(upload);
      const jsontest = JSON.stringify(upload);
      const blob = new Blob(jsontest, { type: "application/json" });
  
      for (var value of formData.values()) {
        console.log(value);
      }
      console.log(token);
  
      formData.append("postDto", blob, {
        type: "application/json",
      });
      formData.append("image", post.fileUrl);
      axios
        .post("http://localhost:5001/posts", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          console.log(post);
          dispatch(addPost(post));
        })
        .catch((error) => {
          console.log("게시물 추가 에러");
        });
    };
  };
    

  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "post/LOAD": {
        console.log(action.post_list);
        return { list: action.post_list };
      }

      case "post/ADD": {
        const new_post_list = [...state.list, action.post];
        return { list: new_post_list };
      }

      default:
        return state;
    }
  }
