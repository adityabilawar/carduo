import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../data/connection';
import User from '../../data/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // connecting to db
  await connect();

  // using method to validate request
  if(method=='POST')
    return res.json(await User.find(req.body)); // login
  else return res.status(400).json({ error: 'invalid request' }); // invalid req. error
}