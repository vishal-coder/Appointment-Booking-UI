import socketio from "socket.io-client";
import React from "react";

export const socket = socketio.connect(`${process.env.REACT_APP_API}`);
export const SocketContext = React.createContext();
