const HandleSocketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected....");
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });

    socket.on("new user", () => {
      console.log("new user added.");
    });
  });
};

module.exports = HandleSocketConnection;
