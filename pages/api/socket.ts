import { Server} from 'socket.io';
import type { NextApiRequest } from 'next'

let roomUsers = 0;
const socketHandler = (req: NextApiRequest, res: any) => {
	if(!res.socket.server.io) {
		const io = new Server(res.socket.server);
		
		io.on('connection', socket => {
			console.log('socket connection from server');

			socket.on('chat', (data) => socket.broadcast.emit('chat', data));
		});

		res.socket.server.io = io;
	}
	res.end();
}

export default socketHandler;