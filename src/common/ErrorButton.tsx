const ErrorButton = () => {
  return (
    <button
      onClick={() => {
        throw new Error("ButtonWithError: User-triggered error!");
      }}
      style={{
        marginTop: "2rem",
        padding: "0.5rem 1.5rem",
        background: "#dc2626",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      Throw Button Error
    </button>
  );
};

export default ErrorButton;
