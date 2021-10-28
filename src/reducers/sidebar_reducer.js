
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const sidebar_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true }
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false }
    default:
      break;
  }
  throw new Error(`Not matching ${action.type} - action type`)
}

export default sidebar_reducer
