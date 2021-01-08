/**
 * send data from simple action to set it in the store
 */
export const simpleAction = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
  });
};
