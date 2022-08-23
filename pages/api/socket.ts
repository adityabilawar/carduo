import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		res.socket.server.io = io;
		
		// buggy when self-hosted, can easily be improved in the future
		// ^ even with video and audio chat
		io.on('connection', socket => {
			socket.on("createdMessage", (msg) =>
				socket.broadcast.emit("newMessage", msg)
			);
		});

	}
	res.end();
}

export default socketHandler;