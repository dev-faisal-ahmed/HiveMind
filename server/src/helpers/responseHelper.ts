import { Response } from 'express';

type TMeta = { page: number; limit: number; total: number; totalPages: number };
type TSuccessResponse = {
  status: number;
  message: string;
  meta: TMeta;
  data: any;
};

type TErrorResponse = { error: any; message: string; status: number };

export const sendSuccessResponse = (
  res: Response,
  { status, data, message, meta }: TSuccessResponse
) => {
  return res.status(status).json({ ok: true, message, meta, data });
};

export const sendErrorResponse = (
  res: Response,
  { status, message, error }: TErrorResponse
) => {
  return res.status(status).json({ ok: false, message, error });
};
