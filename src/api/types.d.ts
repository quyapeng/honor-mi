export interface IArticleData {
  id: number;
  status: string;
  title: string;
  abstractContent: string;
  fullContent: string;
  sourceURL: string;
  imageURL: string;
  timestamp: string | number;
  platforms: string[];
  disableComment: boolean;
  importance: number;
  author: string;
  reviewer: string;
  type: string;
  pageviews: number;
}

export interface IRoleData {
  key: string;
  name: string;
  description: string;
  routes: any;
}

export interface ITransactionData {
  orderId: string;
  timestamp: string | number;
  username: string;
  price: number;
  status: string;
}

export interface IUserData {
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  introduction: string;
  roles: string[];
}

export interface Hero {
  id: number;
  name: string;
  icon: string;
  classify: string[];
}

export interface Player {
  id: number;
  accountname: string;
  nickname: string;
  avatar: string;
  level: number; // 用户等级
  exp: number; // 用户经验值
  rank: number; // 排位赛段位
  bravepoints: number; // 勇者积分
  winningstreak: number; // 连胜场次
  wanttoplay: Hero[]; // 想玩英雄
}
