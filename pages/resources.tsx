import React, { useState, useEffect } from 'react';
import { NotionRenderer } from "react-notion";
import Navbar from '../components/Navbar';

const Resources = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://notion-api.splitbee.io/v1/page/774b11c1a3cb4cb8910179ae1d780fa2"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Navbar />
      <NotionRenderer blockMap={data} fullPage={true} />
    </div>
  )
}

export default Resources