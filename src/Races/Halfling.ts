import Race from './Race';

export default class Halfling extends Race {
  private livePoints = 60;
  instanceCount = 1;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);

    Halfling.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.livePoints;
  }
}