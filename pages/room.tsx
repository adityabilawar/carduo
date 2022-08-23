import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import io, { Socket } from "socket.io-client"
import Link from 'next/link';
import router from 'next/router';
import { isUserAuth } from '../utils/auth';

let socket: Socket;

interface Message {
  user: string,
  message: string
}

// WILL IMPLEMENT VIDEO CHAT FOR TEACHING IN THE FUTURE
const Room = () => {

  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const effectRan = useRef(false);

  useEffect(() => {
    if(effectRan.current) return;
    if(!isUserAuth(localStorage)) {
      router.push('/register');
      return;
    };
    
    setUser(JSON.parse(localStorage.getItem('auth')).name);
    initSocket();
    return () => { effectRan.current = true };
  }, []);

	const initSocket = async () => {
    await fetch('/api/socket');
    socket = io();
    socket.on('newMessage', (msg: Message) => 
      setMessages((currentMsg) => [...currentMsg,msg])
    );
  }

  const sendMessage = async(e) => {
    socket.emit('createdMessage', { user, message });
    setMessages((currentMsg) => [...currentMsg, {user,message}]);
    setMessage("");
  }

  return (
	  <div>
		  <Navbar />
		  <div className="p-20 text-2xl">
			  <h1>Teach It</h1>
			  <div className="text-lg mt-10 h-[600px] w-[1260px] bg-[#ECECEC] p-10 flex justify-start rounded-lg overflow-y-auto space-y-2 flex-col">
          {messages.map((msg, i) => (
            <div className={`flex ${(msg.user == user) ? "bg-blue-500" : "bg-red-500"} text-white rounded-lg p-5 w-full justify-center items-start px-10 flex-col`} key={i}>
                <p className="text-sm">{msg.user}</p>
                <p>{msg.message}</p>
				      </div>
          ))}
			  </div>
			  <input className="border-gray-200 text-md" placeholder="Type here" onChange={(e) => setMessage(e.target.value)} value={message} />
			  <button className="btn text-white mt-5 mx-5" onClick={(e) => sendMessage(e)}>Send</button>
        <Link href='/deck/0'>
          <button className="btn text-white mt-5">Take quiz</button>
        </Link>
		  </div>
	  </div>
  )
}

export default Room;