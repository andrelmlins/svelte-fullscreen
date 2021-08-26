jest.mock("screenfull", () => ({
  default: { on: jest.fn(), off: jest.fn() },
}));
