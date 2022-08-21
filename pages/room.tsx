import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import io, { Socket } from "socket.io-client"
import Link from 'next/link';

let socket: Socket;
const Room = () => {

  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const [chatLogs, setChatLogs] = useState([]);

	const initSocket = async () => {
    await fetch('/api/socket');
    socket = io();
    socket.on('connect', () => {
      console.log('socket connected from client');
    });
    socket.on('chat', (data) => {
      const newChatLogs = chatLogs;
      newChatLogs.push(data);
      setChatLogs(newChatLogs);
    })
  }

  const sendMessage = (e) => {
    e.preventDefault();
    
    socket.emit('chat', { user, text });
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('auth')).name);
    initSocket();
  }, []);

  return (
	  <div>
		  <Navbar />
		  <div className="p-20 text-2xl">
			  <h1>Teach It</h1>
			  <div className="text-lg mt-10 h-[600px] w-[1260px] bg-[#ECECEC] p-10 flex justify-start rounded-lg overflow-y-auto space-y-2 flex-col">
          {chatLogs.map((msg, i) => (
            <div className="flex bg-blue-500 text-white rounded-lg min-h-[80px] w-full justify-center items-start px-10 flex-col" key={i}>
                <p className="text-sm">{msg.user}</p>
                <p>{msg.text}</p>
				      </div>
          ))}
			  </div>
			  <input className="border-gray-200 text-md" placeholder="Type here" onChange={(e) => setText(e.target.value)} value={text} />
			  <button className="btn text-white mt-5 mx-5" onClick={(e) => sendMessage(e)}>Send</button>
        <Link href='/desk/0'>
          <button className="btn text-white mt-5">Take quiz</button>
        </Link>
		  </div>
	  </div>
  )
}

export default Room