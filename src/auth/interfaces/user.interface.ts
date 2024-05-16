// the user

import { RoleType, Favorite, Review, UserAnimeList } from '@prisma/client';

/***
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String
  role      RoleType @default(USER)
  avatar    String    @db.VarChar(1000)
  favorites Favorite[]
  reviews Review[]
  animeList UserAnimeList[]
  createdAt DateTime @default(now())
  updatedAt DateTime @default(now())
}
 */
export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: RoleType;
  avatar: string;
  favorites: Favorite[];
  reviews: Review[];
  animeList: UserAnimeList[];
  createdAt: Date;
  updatedAt: Date;
}
