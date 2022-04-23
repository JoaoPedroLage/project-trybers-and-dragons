import { EnergyType } from '../Energy';

import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _livePoints = 80;

  private _energy: EnergyType;

  constructor(_name: string) {
    super(_name);

    Warrior.instanceCount += 1;
    this._energy = 'stamina';
  }

  get maxLifePoints(): number {
    return this._livePoints;
  }

  get energyType() {
    return this._energy;
  }
}
