import { FC, memo, PropsWithChildren, useMemo } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(
  ({ skillGroup }) => {
    const { name, skills } = skillGroup;
    return (
      <div className='flex flex-col gap-y-4'>
        <span className='text-sm font-bold uppercase tracking-wider text-neutral-600'>{name}</span>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    );
  }
);

SkillGroup.displayName = 'SkillGroup';

const getProficiencyColor = (level: number, max: number): string => {
  const percentage = (level / max) * 100;
  if (percentage >= 80) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
  if (percentage >= 60) return 'bg-blue-100 text-blue-800 border-blue-300';
  if (percentage >= 40) return 'bg-amber-100 text-amber-800 border-amber-300';
  return 'bg-slate-100 text-slate-800 border-slate-300';
};

// const getProficiencyLabel = (level: number, max: number): string => {
//   const percentage = (level / max) * 100;
//   if (percentage >= 80) return "Advanced";
//   if (percentage >= 60) return "Proficient";
//   if (percentage >= 40) return "Intermediate";
//   return "Learning";
// };

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name, level, max = 10 } = skill;
  const colorClass = useMemo(() => getProficiencyColor(level, max), [level, max]);

  return (
    <div
      className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all hover:shadow-md ${colorClass}`}
    >
      {name}
    </div>
  );
});

Skill.displayName = 'Skill';
