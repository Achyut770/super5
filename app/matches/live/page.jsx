import { matchs } from "../../../components/common/helper";
import UpcomingMatches from "../../../components/homepage/UpcomingMatches";
import React from "react";

const page = () => {
  const matches = matchs.filter((items) => items.status === "Live");

  return <UpcomingMatches state="Live" matches={matches} />;
};

export default page;
