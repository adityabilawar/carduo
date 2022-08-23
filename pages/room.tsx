import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import io, { Socket } from "socket.io-client"
import Link from 'next/link';
import router from 'next/router';
import { isUserAuth } from '../utils/auth';
import Peer from 'simple-peer';

let socket: Socket;

// interface Message {
//   user: string,
//   message: string
// }

// WILL IMPLEMENT VIDEO CHAT FOR TEACHING IN THE FUTURE
const Room = () => {

  // const [user, setUser] = useState('');
  // const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState<Message[]>([]);
  const [stream, setStream] = useState<MediaStream>();
  const effectRan = useRef(false);
  const myVideo = useRef<HTMLVideoElement>();
  const userVideo = useRef<HTMLVideoElement>();

  useEffect(() => {
    if(effectRan.current) return;
    if(!isUserAuth(localStorage)) {
      router.push('/register');
      return;
    };
    
    // setUser(JSON.parse(localStorage.getItem('auth')).name);
    initSocket();
    return () => { effectRan.current = true };
  }, []);

	const initSocket = async () => {
    await fetch('/api/socket');
    socket = io();
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    
    setStream(stream);
    myVideo.current.srcObject = stream;
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream
    });
    console.log('joining room');
    peer.on('signal', signal => socket.emit('join-room', signal));
    peer.on('stream', signal => {userVideo.current.srcObject = signal});
    socket.on('user-connected', signal => {
      console.log('user joined');
      socket.emit('connection-create', signal);
      peer.signal(signal);
    });
    socket.on('connectionCreated', signal => {
      console.log('connection complete');
      peer.signal(signal);
    });
    
  }

  return (
	  <div>
		  <Navbar />
		  <div className="p-20 text-2xl">
			  <h1>Teach It</h1>
			  <div className="text-lg mt-10 h-[600px] w-full bg-[#ECECEC] p-20 flex justify-around">
          <div className="bg-[#D9D9D9] h-full mr-5 w-[40%]">
            <video playsInline muted ref={myVideo} autoPlay style={{ width: "100%" }} />
          </div>
          <div className="bg-[#D9D9D9] h-full ml-5 w-[40%]">
            <video playsInline ref={userVideo} autoPlay style={{ width: "100%"}} />
          </div>
        </div>
        <Link href='/deck/0'>
          <button className="btn text-white mt-5">Take quiz</button>
        </Link>
		  </div>
	  </div>
  )
}

export default Room