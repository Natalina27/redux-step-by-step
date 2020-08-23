const initialState = {
    todos: [
        {
            title: 'First todo',
            done: true,
        }, {
            title: 'Second todo',
            done: false,
        }
    ]
};

export const todo = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

