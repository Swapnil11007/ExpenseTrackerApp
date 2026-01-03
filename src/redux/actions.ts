const ReduxActions = {
    ADD_EXPENSE: "ADD_EXPENSE",
    DELETE_EXPENSE: 'DELETE_EXPENSE',
    EDIT_EXPENSE: 'EDIT_EXPENSE',
    SET_EXPENSE_DATA: "SET_EXPENSE_DATA",
}

 const setExpenseData = (expenseList) => ({
  type: ReduxActions.SET_EXPENSE_DATA,
  payload: expenseList
});

 const addExpense = (expense) => ({
  type: ReduxActions.ADD_EXPENSE,
  payload: expense
});

 const deleteExpense = (id) => ({
  type: ReduxActions.DELETE_EXPENSE,
  payload: id
});

 const editExpense = (expense) => ({
  type: ReduxActions.EDIT_EXPENSE,
  payload: expense
});

export {ReduxActions, addExpense, deleteExpense, editExpense, setExpenseData}
