import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		
		io.on("connection", (socket) => {
			socket.emit("me", socket.id)
		
			socket.on("disconnect", () => {
				socket.broadcast.emit("callEnded")
			})
		
			socket.on("join", (data) => {
				io.to(data.to).emit("callJoined", data.signal)
			})
		})

		res.socket.server.io = io;
	}
	res.end();
}

export default socketHandler;