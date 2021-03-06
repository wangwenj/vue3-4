import { createStore } from "vuex";
import { testData, testPosts, ColumnProps } from "./testData";
interface UserProps {
  isLogin: boolean;
  name?: string;
  _id?: number;
}
export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps;
}
export interface PostProps {
  id?: number;
  title: string;
  excerpt?: string;
  content?: string;
  image?: string;
  createdAt?: string;
  columnId: number;
  author?: string | UserProps;
  isHTML?: boolean;
}
const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: true, name: "hacjy", _id: 1 }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "viking" };
    },
    createPost(state, newPost) {
      state.posts.push(newPost);
    }
  },
  getters: {
    getColumns(state) {
      return state.columns.filter(item => item.id >= 1);
    },
    getColumnById: state => (id: number) => {
      return state.columns.find(c => c.id === id);
    }
  }
});

export default store;
