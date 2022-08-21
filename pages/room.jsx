import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import io from "socket.io-client"
import Peer from "simple-peer"

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
				myVideo.current.srcObject = stream
		})

	socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("roomUser", (data) => {
			setDuo(data.from)
			setUser(data.name)
			setSignal(data.signal)
		})
	}, [])

  return (
    <div>
        <Navbar />
        <div className="p-20 text-2xl">
            <h1>Teach It</h1>
            <div className="text-lg mt-10 h-[600px] w-full bg-[#ECECEC] p-20 flex justify-around">
                <div className="bg-[#D9D9D9] h-full mr-5 w-[40%]"></div>
                <div className="bg-[#D9D9D9] h-full ml-5 w-[40%]"></div>
            </div>
            <button className="btn text-white mt-5">Next</button>
        </div>
    </div>
  )
}

export default Room