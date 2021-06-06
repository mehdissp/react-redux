import jsonapi from '../apis/jsonapi';
import axios from 'axios';
import _ from 'lodash';
// export const  fetchPosts= async()=>{
//   const respons=  await axios.get('/posts');
//   //bad aporch bad design : avoid
//     return {
//         type:'FETCH_POSTS',
//         payload:respons,
//     }
// }

export const fetchPosts = () => async dispatch => {
  const response = await jsonapi.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  });
}

export const fetchUser=(id)=> async dispatch=>{
  //  const response = await jsonapi.get(`/users/${id}`);
  //  dispatch({
  //    type:'FETCH_USER',
  //    payload:response.data
  //  });
  _fetchUser(id,dispatch);
}

const _fetchUser=_.memoize(async (id,dispatch)=>{
    const response=await jsonapi.get(`/users/${id}`);
    dispatch({
      type:'FETCH_USER',
      payload:response.data
    });
})

