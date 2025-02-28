import { matchs } from "../../../components/common/helper";
import UpcomingMatches from "../../../components/homepage/UpcomingMatches";

export default function page() {
  const matches = matchs.filter((items) => items.status === "Upcoming");

  return <UpcomingMatches matches={matches} />;
}
