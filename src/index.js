import { Codegramer } from 'ts-workshop';

const aitor = new Codegramer('aitor', [
  { name: 'css', level: 10 },
  { name: 'angular', level: 7 }
]);

console.log(aitor.cry());

console.log(`Aitor skill level in 'angular': ${aitor.getSkill('angular').level}`);
