export enum AbilityOptions {
  Attacker = 'Attacker',
  Defender = 'Defender'
}

export interface IHero {
  id: string;
  name: string;
  ability: AbilityOptions,
  suitColor: string;
  startingPower: number;
  currentPower: number;
  startTrainingDate: Date;
  trainerId: string;
  trainings: Date[]
}

// Merging decleration 
export interface IHero {
  age:number;
}

export class Hero {}
export abstract class Hero{
  // Desginate to init a light path 
  constructor(){}
  kickEveils (){}

}




export class implements HeroInterior { 
override   kickEveils (){

}

}




