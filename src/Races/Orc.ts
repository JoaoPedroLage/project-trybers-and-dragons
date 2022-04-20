import Race from './Race';

export default class Orc extends Race {
  private livePoints = 74;
  instanceCount = 1;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);

    Orc.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.livePoints;
  }
}