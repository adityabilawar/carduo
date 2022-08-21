import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		
		// buggy when self-hosted, can easily be improved in the future
		// ^ even with video and audio chat
		io.on('connection', socket => {
			console.log('socket connection from server');

			socket.on('chat', (data) => socket.broadcast.emit('chat', data));
		});

		res.socket.server.io = io;
	}
	res.end();
}

export default socketHandler;