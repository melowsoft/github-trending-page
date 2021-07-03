
export interface Repository {
builtBy:  Author[];
description: string;
forks: number;
language: string;
languageColor: string;
rank: 1
repositoryName: string;
since: string;
starsSince: number;
totalStars: number;
url: string;
username: string;
}

export interface Author {
  avatar: string;
  url: string
  username: string;
}