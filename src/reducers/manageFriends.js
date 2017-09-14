export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: state.friends.concat(action.friend) }
      break;
    case 'REMOVE_FRIEND':
      let friends = state.friends.filter(obj => obj.id !== action.id)
      return { friends: friends }
      break;
    default:
      return state
  }
}
