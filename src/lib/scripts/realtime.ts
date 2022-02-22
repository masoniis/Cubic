import ioClient from "socket.io-client";
const ENDPOINT = "https://cubiconline.vercel.app/socket";

const socket = ioClient(ENDPOINT)

export const io = socket