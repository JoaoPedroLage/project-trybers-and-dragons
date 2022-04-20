import Race from './Race';

export default class Dwarf extends Race {
  private livePoints = 80;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);

    Dwarf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this.livePoints;
  }
}
