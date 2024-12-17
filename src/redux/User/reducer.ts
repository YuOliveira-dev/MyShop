// Define uma interface para o usuário, que contém o nome e o email
interface User {
    name: string;
    email: string;

}
// Define uma interface par ao estado do usuário, o estado pode conter as informações do usuário ou pode ser nulo
interface UserState {
    user: User | null;
}
// Quando a aplicação inicia, o usuário não está logado
const initialState: UserState = {
    user: null,
}

// Reducer: guarda o estado que desejamos compartilhar na aplicação
//          Manipula/altera o estado
interface userAction {
    type: string;
    payload?: User;
}
// Exporta o reducer com estado e a ação, atualizando o estado e toda a aplicação
export function userReducer(
    state = initialState, 
    action: userAction

): UserState{
    // Se o type da ação for login, return o estado do jeito que está, mas com as informações de usuário
    if (action.type === 'user/login') {
        return {
            ...state,
            user: action.payload as User,
        };
        // Se o tipo da ação for logout, retorna o estado do jeito que está e com as informações de usuário em null
    }else if (action.type === 'user/logout') {
        return {
            ...state,
            user: null,}
    }
    // Se for usado qualquer outra ação, retorna o estado da forma que está
    return state;
}  

 
     
