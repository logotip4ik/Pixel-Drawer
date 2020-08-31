export default {
  namespaced: true,
  state: {
    grid: [],
    history: [],
    brushColor: 'white',
  },
  mutations: {
    changeBrush(state, color) {
      state.brushColor = color;
    },
    addGridToHistory(state, grid) {
      state.history = [...state.history]
      console.log(grid);
      // console.log(history[0].grid[0][0].currColor);
    },
    fillBox(state, args) {
      state.grid[args.pos.x][args.pos.y].currColor = args.color;
    }
  },
  actions: {
    async fillBox({ state, commit }, args) {
      const grid = state.grid;
      await commit('addGridToHistory', grid)
      setTimeout(() => {
        state.grid[args.pos.x][args.pos.y].currColor = args.color;
      }, 1000)
      // console.log(state.history[0].grid[0][0].currColor);
      // await commit('fillBox', args)
      // console.log(state.history[0][0][0], grid)
      // state.history.push(grid);
      // console.log(state.history);
      // state.grid[args.pos.x][args.pos.y].currColor = args.color;
    },
    async undo({ state, dispatch }) {
      if (state.history.length === 0) return;
      if (state.history.length === 1) {
        await dispatch('initGrid');
        return;
      }
      // state.history.pop();
      console.log(state.history);
      // console.log(state.grid);
      state.grid = state.history[state.history.length - 1];
      // console.log(state);
    },
    initGrid({ state }) {
      // console.log(state.history);

      const newGrid = [];
      for (let row = 0; row < 10; row += 1) {
        const Row = [];
        for (let col = 0; col < 10; col += 1) {
          Row.push({
            currColor: 'transparent',
            pos: {
              x: row,
              y: col,
            },
          });
        }
        newGrid.push(Row);
      }
      state.grid = newGrid;
      state.history.push(newGrid)
      // console.log(state.history);
    },
  },
};
