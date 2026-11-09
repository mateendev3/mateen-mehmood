import { skills } from '../../data/skills';
import { TechChip } from '../ui/TechLogo';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';

/** Grouped technology chips. Empty groups are skipped. Used on Home and About. */
export function SkillsGrid() {
  const groups = skills.filter((group) => group.items.length > 0);
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, i) => (
        <Reveal key={group.title} delay={(i % 2) * 0.06}>
          <div className="card h-full p-7">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon name={group.icon} className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <TechChip name={item} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
