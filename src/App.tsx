function App() {
  return (
    <>
      <button
        onClick={() => {
          throw new Error("This error for sourve map tracking!");
        }}
      >
        Throw error for source map tracking
      </button>
    </>
  );
}

export default App;
