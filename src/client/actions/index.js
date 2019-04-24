export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async (dispatch, getState, api) => {
  const { data } = await api.get('/users')
  dispatch({ type: FETCH_USERS, payload: data })
} 
