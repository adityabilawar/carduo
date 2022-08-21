import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		
		io.on("connection", (socket) => {
			socket.emit("me", socket.id)
		
			socket.on("disconnect", () => {
				socket.broadcast.emit("roomEnded")
			})

			socket.on("roomUser", (data) => {
				io.to(data.userToCall).emit("roomUser", { signal: data.signalData, from: data.from, name: data.name })
			})
		
			socket.on("join", (data) => {
				io.to(data.to).emit("roomJoined", data.signal)
			})
		})

		res.socket.server.io = io;
	}
	res.end();
}

export default socketHandler;