import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		res.socket.server.io = io;
		
		// video/audio chat implementation in the future
		io.on('connection', socket => {
			socket.on("createdMessage", (msg) =>
				socket.broadcast.emit("newMessage", msg)
			);
		});

	}
	res.end();
}

export default socketHandler;