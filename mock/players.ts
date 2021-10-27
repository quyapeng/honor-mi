// 路由实现
import { Response, Request } from "express";

export const getPlayers = (req: Request, res: Response) => {
  console.log(req, res);

  return res.json({
    code: 200,
    data: []
  });
};
