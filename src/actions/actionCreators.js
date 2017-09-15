const  todoid = 0;


export function addtodo(text) {
     const todoid=todoid+1;
    return {
        type: 'ADD_TODO',
        id: todoid,
        text
    }
};