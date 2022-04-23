import Race from './Race';

export default class Elf extends Race {
  private _livePoints = 99;
  instanceCount = 1;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);

    Elf.instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._livePoints;
  }

  get createdRacesInstances() {
    return this.instanceCount;
  }
}