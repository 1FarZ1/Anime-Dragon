import {
  Controller,
  Get,
  Header,
  HttpStatus,
  Param,
  ParseIntPipe,
  //   Post,
  Res,
  Headers,
} from '@nestjs/common';
import * as fs from 'fs';
import { Response } from 'express';
import { EpisodesService } from './episodes.service';
import { statSync } from 'fs';

@Controller('/episodes')
export class EpisodesController {
  constructor(private readonly episodesService: EpisodesService) {}

  @Get('/:animeId')
  getEpisodes(@Param('animeId', ParseIntPipe) animeId: number) {
    return this.episodesService.getEpisodes(animeId);
  }

  @Get('/episode/:episodeId')
  getEpisode(
    // @Param('animeId', ParseIntPipe) animeId: number,
    @Param('episodeId', ParseIntPipe) episodeId: number,
  ) {
    return this.episodesService.getEpisode(episodeId);
  }

  //TODO
  @Get('/episode/stream/:episodeId')
  @Header('Accept-Ranges', 'bytes')
  @Header('Content-Type', 'video/mp4')
  async streamEpisode(
    @Res() res: Response,
    @Headers() headers,
    @Param('episodeId', ParseIntPipe) episodeId: number,
  ) {
    const videoPath = await this.episodesService.getEpisodePath(episodeId);
    // const videoPath = `assets/${id}.mp4`;
    const { size } = statSync(videoPath);
    const videoRange = headers.range;
    if (videoRange) {
      const parts = videoRange.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : size - 1;
      const chunksize = end - start + 1;
      const readStreamfile = fs.createReadStream(videoPath, {
        start,
        end,
        highWaterMark: 60,
      });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Content-Length': chunksize,
      };
      res.writeHead(HttpStatus.PARTIAL_CONTENT, head); //206
      readStreamfile.pipe(res);
    } else {
      const head = {
        'Content-Length': size,
      };
      res.writeHead(HttpStatus.OK, head); //200
      fs.createReadStream(videoPath).pipe(res);
    }
    // res.setHeader('Content-Type', 'video/mp4');
    // res.setHeader('Accept-Ranges', 'bytes');
    // res.setHeader('Content-Length', fs.statSync(path).size);
    // res.setHeader('Content-Disposition', `inline; filename=${path}`);
    // return fs.createReadStream(path).pipe(res);
  }

  //   @Post('/add')
  //   addEpisode(): string {
  //     return 'Episode added successfully';
  //   }
}
