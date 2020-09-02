export default {
  namespaced: true,
  state: {
    grid: [],
    gridWidth: 10,
    gridHeight: 10,
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
      state.grid[args.pos.x][args.pos.y].currColor = 
        state.grid[args.pos.x][args.pos.y].currColor !== 'transparent' ? 'transparent' : args.color;
    },
    changeGridWidth(state, val) {
      state.gridWidth = val;
    },
    changeGridHeight(state, val) {
      state.gridHeight = val;
    },
  },
  actions: {
    initGrid({ state }) {
      const newGrid = [];
      for (let row = 0; row < state.gridHeight; row += 1) {
        const Row = [];
        for (let col = 0; col < state.gridWidth; col += 1) {
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
