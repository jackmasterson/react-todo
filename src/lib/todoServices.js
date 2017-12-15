import io from 'socket.io-client';

export const add = (todo, todos) => {
    let k = 0;
    for (let single of todos) {
        single.key = k;
        k++;
        single.name = '';
    }
    return [...todos, {value: todo, key: k}];
}

export const updated = (todo, edits, todos) => {
    for (let single of todos) {
        if (single.key === todo.key) {
            todo.value = edits;
            todo.name = '';
        }
    }
    return [...todos];
}

export const deleteThis = (todo, todos) => {
    todos = todos.filter(single => (single !== todo));
    for (let doing of todos) {
        doing.name = '';
    }
    return [...todos];
}

export const crossThisOff = (todo) => {
    if (todo) {
        todo.complete = 'complete';
    }
    return todo;
}

export const select = (todo, todos) => {
    for (let doing of todos) {
        doing.name = '';
    }
    if (todo) {
        todo.name = 'selected';
    }
}

export const signIn = (user, password, callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', (() => {
        socket.emit('user', {user, password});
    }));
    socket.on('new-user', () => {
        sessionStorage.setItem('new-user', true);
        callback(false);
    });
    socket.on('successful-sign-on', () => {
        callback(true);
    });
}

export const newUser = (user, password, callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', () => {
        socket.emit('new-user-attempt', {user, password});
    });
}