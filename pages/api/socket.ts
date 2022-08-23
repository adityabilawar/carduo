import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		res.socket.server.io = io;
		
		// video/audio chat implementation in the future
		io.on('connection', socket => {
			socket.on("join-room", (signal) => {
				console.log('room joined');
				socket.broadcast.emit("user-connected", signal);
			});

			socket.on('connection-create', (signal) => {
				socket.broadcast.emit('connectionCreated', signal);
			});

			socket.on('disconnect', () => {
				socket.broadcast.emit('user-disconnected');
			});
			
		});

	}
	res.end();
}

export default socketHandler;