import { Player } from './player.type';
import { Coach } from './coach.type';

export interface TeamInfo {
  team_logo: string;
  players: Player[];
  coaches: Coach[];
}
