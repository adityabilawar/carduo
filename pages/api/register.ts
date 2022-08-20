import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../data/connection';
import User from '../../data/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // connecting to db
  await connect();

  // error handling function
  const catcher = (error: Error) => res.status(400).json({ error });

  // using method to run database check/update
  if(method=='POST') {
    // checking if name already exists
    if((await User.find({name: req.body.name})).length > 0)
      return res.status(400).json({ error: 'user already exists' });
    
    else return res.json(await User.create(req.body).catch(catcher)); // register
  }
  else return res.status(400).json({ error: 'invalid request' }); // invalid req. error
}