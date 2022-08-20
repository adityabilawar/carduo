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
  if(method=='GET') res.json(await UserModel.find(req.body).catch(catcher)); // login
  if(method=='POST') res.json(await UserModel.create(req.body).catch(catcher)); // register
  else res.status(400).json({ error: 'invalid request' }); // invalid req. error
}