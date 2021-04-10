const createStore = (reducer) => {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  };

  const getState = () => state
  return { dispatch, getState }
}

function reducerrst(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};



function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(reducerrst)
store.dispatch({ type: '@2INIT' })

let button = document.getElementById('button');

button.addEventListener('click', function () {
  store.dispatch({ type: 'INCREASE_COUNT' });
})
