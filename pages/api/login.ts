import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../lib/connection';
import User from '../../lib/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const data = JSON.parse(req.body);

  // connecting to db
  await connect();

  // using method to validate request
  if(method=='POST')
    return res.json(await User.find(data)); // login
  else return res.status(400).json({ error: 'invalid request' }); // invalid req. error
}