import { EnergyType } from '../Energy';

export default abstract class Archetype {
  static instanceCount = 0;

  private _special: number;
  private _cost: number;

  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
    this._name = _name;
  }
  
  get name() {
    return this._name; 
  }

  get special() {
    return this._special; 
  }

  get cost() {
    return this._cost; 
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    if (this.instanceCount === 0) throw new Error('Not implemented');

    return this.instanceCount;
  }
}