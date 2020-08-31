export default {
  namespaced: true,
  state: {
    grid: [],
    darkMode: false,
    brushColor: 'transparent',
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    changeBrush(state, color) {
      state.brushColor = color;
    },
    fillBox(state, args) {
      state.grid[args.pos.x][args.pos.y].currColor = args.color;
    }
  },
  actions: {
    initGrid({ state }) {
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
    },
  },
};
