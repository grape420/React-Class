import * as Actions from "../actions/postDetailsActions";

// state 초기값
const initialState = {
  post: {}, // 포스트
  loading: false, // 페이지 로딩
  hasError: false, // 응답 에러 여부
};

/*
  reducer 정의
  action의 타입에 따라서 전달받은 state를 변경한 새로운 객체를 리턴.
*/
const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POST_DETAILS:
      return {
        ...state, // 이전 값 복사
        loading: true,
      };
    case Actions.GET_POST_DETAILS_SUCCESS:
      return {
        post: action.payload,
        loading: false,
        hasError: false,
      };
    case Actions.GET_POST_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default postDetailsReducer;
