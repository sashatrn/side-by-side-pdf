import path from "path";
import { renderTemplate } from "../render/templateEngine";
import { GenderTeamResult } from "../scoring/team";

export function buildTeamHtml(teamResults: {
  men: GenderTeamResult[];
  women: GenderTeamResult[];
}): string {
  return renderTemplate("team.njk", {
    reportTitle: "Командний протокол",
    event: {
      title: `Всеукраїнські змагання "Пліч-о-пліч..."`,
      subtitle: `ІІІ Етап Пліч-о-пліч, Всеукраїнських шкільних ліг`,
      location: "м. Житомир",
      date: "02.03.2025",
      logo: `file://${path.resolve("src/assets/logo.png")}`,
      footer: "Житомирський район, 2025",
    },
    men: teamResults.men,
    women: teamResults.women,
  });
}
