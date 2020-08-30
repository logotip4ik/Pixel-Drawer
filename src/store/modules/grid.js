export default {
  namespaced: true,
  state: {
    grid: [],
    history: [],
    brushColor: 'white',
  },
  mutations: {
    undo(state) {
      if (state.history.length === 1) return;
      console.log(state.history.length);
      state.history.pop();
      console.log(state.history);
      // console.log(state.grid);
      // state.grid = state.history[state.history.length - 1];
      // console.log(state);
    },
    changeBrush(state, color) {
      state.brushColor = color;
    },
    fillBox(state, args) {
      console.log(state.history);
      state.history.push(state.grid);
      state.grid[args.pos.x][args.pos.y].currColor = args.color;
    },
  },
  actions: {
    async initGrid({ state }) {
      await console.log(state.history);

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
      state.history.push(newGrid);
      console.log(state.history);
    },
  },
};
