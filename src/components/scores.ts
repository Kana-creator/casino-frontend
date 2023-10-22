import { Obj } from "./Objects";

export const Scores = (ids: number[], score: number, obj: Obj[]) => {
  if (ids[0] === ids[1] && ids[0] === ids[2]) {
    const score_one: number = obj[1].score;
    score = score + score_one;
  }

  if (ids[3] === ids[4] && ids[3] === ids[5]) {
    const score_two: number = obj[3].score;
    score = score + score_two;
  }

  if (ids[6] === ids[7] && ids[6] === ids[8]) {
    const score_three: number = obj[6].score;
    score = score + score_three;
  }

  return score;
};
