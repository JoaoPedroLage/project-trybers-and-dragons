export default abstract class Race {
  static instanceCount = 0;

  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }
  
  get name() {
    return this._name; 
  }

  get dexterity() {
    return this._dexterity; 
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    if (this.instanceCount === 0) throw new Error('Not implemented');

    return this.instanceCount;
  }
}