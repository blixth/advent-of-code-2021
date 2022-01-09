import axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {SESSION_COOKIE} from '../../session-cookie';

export class AdventOfCodeClient {
  public static getPuzzleInputAsString = async (
    day: number,
    part: number
  ): Promise<string[]> => this.getPuzzleInput(day, part);

  public static getPuzzleInputAsNumbers = async (
    day: number,
    part: number
  ): Promise<number[]> =>
    (await this.getPuzzleInput(day, part)).map(value => Number(value));

  private static getPuzzleInput = async (
    day: number,
    part: number
  ): Promise<string[]> => {
    try {
      const config: AxiosRequestConfig = {
        headers: {
          cookie: SESSION_COOKIE,
        } as AxiosRequestHeaders,
      };

      const {status, data} = await axios.get(
        `https://adventofcode.com/2021/day/${day}/input`,
        config
      );

      if (status === 200) {
        const newLine = '\n';
        return data.split(newLine);
      }

      return [];
    } catch (error) {
      return [];
    }
  };
}
