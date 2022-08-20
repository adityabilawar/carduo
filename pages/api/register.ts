import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../lib/connection';
import User from '../../lib/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const data = JSON.parse(req.body);

  // connecting to db
  await connect();

  // using method to run database check/update
  if(method=='POST') {
    // checking if name already exists
    if((await User.find({name: data.name})).length > 0)
      return res.status(400).json({ error: 'user already exists' });
    
    return res.json(await User.create(data)); // register
  }
  else return res.status(400).json({ error: 'invalid request' }); // invalid req. error
}