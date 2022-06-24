import { Request, Response, NextFunction } from 'express';

// Extends the request to add the user from auth
export interface AuthRequest extends Request {
  user: any
}