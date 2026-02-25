import path from "path";
import { renderTemplate } from "../render/templateEngine";
import { GenderTeamResult } from "../scoring/team";
import { loadConfig } from "../config";
import { formatDate } from "../utils/date";
import { imageToBase64 } from "../utils/image";

export function buildTeamHtml(
  teamResults: {
    men: GenderTeamResult[];
    women: GenderTeamResult[];
  },
  eventDate: Date,
): string {
  const config = loadConfig();

  return renderTemplate("team.njk", {
    reportTitle: "Командний протокол",
    event: {
      title: `Всеукраїнські змагання "Пліч-о-пліч всеукраїнські шкільні ліги зі<br/>
        спортивного орієнтування" серед учнів закладів загальної середньої<br/>
        освіти "РАЗОМ ПЕРЕМОЖЕМО"`,
      subtitle: `ЗАГАЛЬНОКОМАНДНИХ РЕЗУЛЬТАТІВ ЗМАГАНЬ<br/>
        зі спортивного орієнтування ${config.reportHeader.stage} Пліч-о-пліч, Всеукраїнських шкільних ліг<br/>
        ${config.reportHeader.region_of}, ${formatDate(eventDate, "yyyy")} р.`,
      location: config.reportHeader.location,
      date: formatDate(eventDate),
      logo1: imageToBase64(path.resolve("src/assets/logo1.png")),
      logo2: imageToBase64(path.resolve("src/assets/logo2.png")),
    },
    officials: config.officials,
    men: teamResults.men,
    women: teamResults.women,
  });
}
