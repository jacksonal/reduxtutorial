const todo = (state={}, action) => {
	switch (action.type) {
		case  'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id){
				return state;
			}
			return Object.assign({}, state, {
				completed: !state.completed
			});
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch(action.type){
		case ADD_TODO:
			return [
					...state,
					{
						text: action.text,
						completed: false
					}
				];
		case TOGGLE_TODO:
			return state.map((todo, index) => {
					if(index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}
					return todo;
				});
		default:
			return state;
	}
};

export default todos;