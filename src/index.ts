import { Codegramer, abilities } from 'ts-workshop';

const aitor = new Codegramer('aitor', [
  { name: 'css', level: 10 },
  { name: 'angular', level: 7 }
], abilities.cry);

console.log(aitor.cry());

const skill = aitor.getSkill('angular');

if (skill) {
  console.log(`Aitor skill level in 'angular': ${skill.level}`);
}

aitor.attack();
aitor.raisePower();
aitor.attack();
