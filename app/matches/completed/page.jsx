import { matchs } from "../../../components/common/helper";
import UpcomingMatches from "../../../components/homepage/UpcomingMatches";
import React from "react";

const page = () => {
  const matches = matchs.filter((items) => items.status === "Completed");
  return <UpcomingMatches state="Completed" matches={matches} />;
};

export default page;
