import express from 'express';
import db from '../config/db';

export const usersRoutes = express.Router();

// GET /api/users
usersRoutes.get('/', async (req, res) => {
  try {
    const users = await db.select().from('users');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/users/:id
usersRoutes.get('/:id', async (req, res) => {
  try {
    const user = await db('users').where('id', req.params.id).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
