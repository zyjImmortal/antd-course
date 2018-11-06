export default {
    // model 的命名空间，只能用字符串
    namespace: 'puzzlecards', 
    // 当前 model 状态的初始值，表示当前状态
    state: {
        data: [
            {
                id: 1,
                setup: 'Did you hear about the two silk worms in a race?',
                punchline: 'It ended in a tie',
            },
            {
                id: 2,
                setup: 'What happens to a frog\'s car when it breaks down?',
                punchline: 'It gets toad away',
            }
        ],
        counter: 100
    },
    // reducers用于处理同步操作，可以修改state，由action触发，reducer 是一个纯函数，它接受当前的 state 及一个数据体（payload）作为入参，返回一个新的 state
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },

}