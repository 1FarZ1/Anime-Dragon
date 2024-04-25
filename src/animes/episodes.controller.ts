import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import * as fs from 'fs';
import { Response } from 'express';

@Controller('/episodes')
export class EpisodesController {
  constructor() {}

  @Get('/')
  getEpisodes(): string[] {
    return ['Episode 1', 'Episode 2', 'Episode 3'];
  }

  @Post('/add')
  addEpisode(): string {
    return 'Episode added successfully';
  }

  @Get('/episode/:episodeId')
  async streamEpisode(
    @Res() res: Response,
    @Param('episodeId') episodeId: string,
  ) {
    const filePath = `uploads/episodes/${episodeId}.mp4`;

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', fs.statSync(filePath).size);

    fs.createReadStream(filePath).pipe(res);
  }
}
