import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../data/connection';
import { UserModel } from '../../data/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // connecting to db
  await connect();

  // error handling function
  const catcher = (error: Error) => res.status(400).json({ error });

  // using method to run database check/update
  if(method=='GET') return res.json(await UserModel.find(req.body).catch(catcher)); // login
  else if(method=='POST') {
    // checking if name already exists
    if((await UserModel.find({name: req.body.name})).length > 0)
      return res.status(400).json({ error: 'user already exists' });
    
    return res.json(await UserModel.create(req.body).catch(catcher)); // register
  }
  else return res.status(400).json({ error: 'invalid request' }); // invalid req. error
}