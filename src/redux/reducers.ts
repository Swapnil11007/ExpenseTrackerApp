import { ReduxActions } from "./actions";

const initialState = {
  expenseDetails: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReduxActions.SET_EXPENSE_DATA:
      return { ...state, expenseDetails: action.payload };

    case ReduxActions.ADD_EXPENSE:
      return {
        ...state,
        expenseDetails: [action.payload, ...state.expenseDetails],
      };

    case ReduxActions.DELETE_EXPENSE:
      return {
        ...state,
        expenseDetails: state.expenseDetails.filter(
          (exp) => exp.id !== action.payload
        ),
      };

    case ReduxActions.EDIT_EXPENSE:
      return {
        ...state,
        expenseDetails: state.expenseDetails.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp
        ),
      };

    default:
      return state;
  }
};

export const getExpenseDataFromRedux = (state) =>
  state.expenseDetails;

export default expenseReducer;
