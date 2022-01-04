// 路由实现
import { Response, Request } from "express";
import { heros } from "./heros";
import { Hero, Player } from "../src/api/types";
import faker from "faker";

faker.locale = "zh_CN";
// 模拟玩家数据
const playerCount = 100;
const playerList: Player[] = [];

for (let i = 0; i < playerCount; i++) {
  playerList.push({
    id: i,
    accountname: faker.name.findName(),
    nickname: faker.name.findName(),
    avatar: faker.image.avatar(),
    level: faker.random.number(30),
    exp: faker.random.number(100000), // 用户经验值
    rank: faker.random.number(200), // 排位赛段位
    bravepoints: faker.random.number(1000), // 勇者积分
    winningstreak: faker.random.number(100), // 连胜场次
    wanttoplay: Array.from(genWanttoplay()) // 想玩英雄
  });
}
function genWanttoplay() {
  let wanttoplay: Set<Hero> = new Set();
  while (wanttoplay.size > 3) {
    wanttoplay.add(heros[faker.random.number(9)]);
  }
  return wanttoplay;
}

export const getPlayers = (req: Request, res: Response) => {
  const { accountname, nickname, page = 1, limit = 20 } = req.query;

  let mockList = playerList.filter(item => {
    if (accountname && item.accountname.indexOf(accountname.toString()) < 0)
      return false;
    return true;
  });

  const pageList = mockList.filter(
    (_, index) =>
      index < Number(limit) * Number(page) &&
      index >= Number(limit) * (Number(page) - 1)
  );

  return res.json({
    code: 200,
    data: {
      total: mockList.length,
      players: pageList
    }
  });
};

export const getPlayer = (req: Request, res: Response) => {
  const { id } = req.params;
  for (const player of playerList) {
    if (player.id.toString() === id) {
      return res.json({
        code: 20000,
        data: {
          player
        }
      });
    }
  }
  return res.json({
    code: 70001,
    message: "player not found"
  });
};

export const createPlayer = (req: Request, res: Response) => {
  const { player } = req.body;
  res.json({
    code: 200,
    data: {
      player
    }
  });
};
