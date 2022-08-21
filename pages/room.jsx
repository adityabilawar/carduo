import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import io from "socket.io-client"
import Peer from "simple-peer"
import CopyToClipboard from 'react-copy-to-clipboard';

const socket = io('http://localhost:5000');
const Room = () => {
	const myVideo = useRef()
	const userVideo = useRef()
  	const connectionRef= useRef()
	const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ duo, setDuo ] = useState("")
	const [ signal, setSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ user, setUs ] = useState("")

  useEffect(() => {
	  navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
		  setStream(stream)
	  })

	socket.on("me", (id) => {
		setMe(id)
	})

	  socket.on("roomUser", (data) => {
		  setDuo(data.from)
		  setUser(data.name)
		  setSignal(data.signal)
	  })

	  answerCall
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				user: user
			})
		})
		peer.on("stream", (stream) => {

			userVideo.current.srcObject = stream

		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall = () => {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

  return (
	  <div>
		  <Navbar />
		  <div className="p-20 text-2xl">
			  <h1>Teach It</h1>
			  <div className="text-lg mt-10 h-[600px] w-[1260px] bg-[#ECECEC] p-10 flex justify-start rounded-lg overflow-y-auto space-y-2 flex-col">
				  <div className="flex bg-gray-300 rounded-lg min-h-[80px] w-full justify-center items-start px-10 flex-col flex-wrap">
					  <p className="text-sm">Username</p>
					  <p>Message here</p>
				  </div>
				  <div className="flex bg-blue-500 text-white rounded-lg min-h-[80px] w-full justify-center items-start px-10 flex-col">
					  <p className="text-sm">Username</p>
					  <p>Message here</p>
				  </div>
			  </div>
			  <input className="border-gray-200 text-md" placeholder="Type here" />
			  <button className="btn text-white mt-5 mx-5">Send</button>
			  <button className="btn text-white mt-5">Take quiz</button>
		  </div>
	  </div>
  )
}

export default Room