import type { Station } from "./types";

export interface CuratedStation {
  id: string;
  matchNameIncludes: string[];
  countryCode?: string;
  preferredLabel: string;
  logoUrl?: string;
  editorialDescription?: string;
  regionDescription?: string;
  listeningMood?: string;
  atmosphereHint?: string;
  metadataCleanup?: {
    removePrefixes?: string[];
  };
  priorityScore: number;
  metadataUrl?: string;
  metadataFormat?: "json" | "text";
  location?: {
    lat: number;
    lng: number;
  };
}

export const CURATED_STATIONS: CuratedStation[] = [
  {
    id: "wbgo",
    matchNameIncludes: ["wbgo", "88.3 wbgo"],
    countryCode: "US",
    preferredLabel: "WBGO",
    editorialDescription:
      "Newark's public jazz station — straight-ahead, Latin, and contemporary voices from the New York metro.",
    regionDescription: "Metro-area jazz with a club-stage intimacy and a broadcast polish.",
    listeningMood: "Late-set energy with a warm room tone.",
    atmosphereHint: "smoky Newark club",
    priorityScore: 9,
    location: { lat: 40.735, lng: -74.172 },
  },
  {
    id: "jazz24",
    matchNameIncludes: ["jazz24", "jazz 24"],
    countryCode: "US",
    preferredLabel: "Jazz24",
    editorialDescription:
      "A national jazz stream built for long listening — standards, vocals, and modern straight-ahead.",
    regionDescription: "Coast-to-coast jazz programming with a steady, unhurried flow.",
    listeningMood: "Easy midnight drive through a lit city grid.",
    atmosphereHint: "highway neon and horns",
    priorityScore: 9,
  },
  {
    id: "radio-swiss-jazz",
    matchNameIncludes: ["radio swiss jazz"],
    countryCode: "CH",
    preferredLabel: "Radio Swiss Jazz",
    editorialDescription:
      "Swiss public jazz with a clean signal and a cosmopolitan playlist.",
    regionDescription: "Alpine clarity with European and American jazz in rotation.",
    listeningMood: "Cool, precise, and uncluttered.",
    atmosphereHint: "alpine night studio",
    priorityScore: 8,
  },
  {
    id: "jazz-fm-uk",
    matchNameIncludes: ["jazz fm", "jazzfm"],
    countryCode: "GB",
    preferredLabel: "Jazz FM",
    editorialDescription:
      "London's jazz station — soul-jazz, contemporary, and classic voices on one dial.",
    regionDescription: "A metropolitan UK jazz room with a polished late-evening glow.",
    listeningMood: "Urban, sleek, and rhythm-forward.",
    atmosphereHint: "Thames-side blue hour",
    priorityScore: 8,
    location: { lat: 51.507, lng: -0.128 },
  },
  {
    id: "tsf-jazz",
    matchNameIncludes: ["tsf jazz"],
    countryCode: "FR",
    preferredLabel: "TSF Jazz",
    editorialDescription:
      "Paris jazz radio with French and international repertoire and a café-concert spirit.",
    regionDescription: "Left-bank listening with a conversational, vinyl-warm tone.",
    listeningMood: "Candlelit bistro set.",
    atmosphereHint: "Paris zinc bar",
    priorityScore: 8,
    location: { lat: 48.856, lng: 2.352 },
  },
  {
    id: "fip-jazz",
    matchNameIncludes: ["fip", "fip jazz"],
    countryCode: "FR",
    preferredLabel: "FIP",
    editorialDescription:
      "French public radio with deep jazz hours alongside eclectic discovery.",
    regionDescription: "Editorial Paris listening with jazz at the center of the night.",
    listeningMood: "Curious, cosmopolitan, and unhurried.",
    atmosphereHint: "studio lamp and vinyl",
    priorityScore: 7,
  },
  {
    id: "kcsm-jazz",
    matchNameIncludes: ["kcsm"],
    countryCode: "US",
    preferredLabel: "KCSM Jazz",
    editorialDescription:
      "Bay Area college jazz — education, community, and a wide stylistic arc.",
    regionDescription: "San Francisco Bay jazz with an open-door concert feel.",
    listeningMood: "West Coast cool with a friendly pulse.",
    atmosphereHint: "fog over the bay bridge",
    priorityScore: 7,
    location: { lat: 37.53, lng: -122.12 },
  },
  {
    id: "wclk",
    matchNameIncludes: ["wclk"],
    countryCode: "US",
    preferredLabel: "WCLK",
    editorialDescription:
      "Atlanta's jazz voice — soul, fusion, and straight-ahead from the American South.",
    regionDescription: "Southern jazz warmth with a broadcast stage presence.",
    listeningMood: "Groove-led evening with a soulful lift.",
    atmosphereHint: "Atlanta velvet night",
    priorityScore: 7,
    location: { lat: 33.749, lng: -84.388 },
  },
  {
    id: "kmhd",
    matchNameIncludes: ["kmhd"],
    countryCode: "US",
    preferredLabel: "KMHD",
    editorialDescription:
      "Portland jazz — local artists, national voices, and a Pacific Northwest calm.",
    regionDescription: "Rain-city jazz with an intimate listening-room cadence.",
    listeningMood: "Mellow, attentive, and unpretentious.",
    atmosphereHint: "Portland rain on brick",
    priorityScore: 7,
    location: { lat: 45.523, lng: -122.676 },
  },
  {
    id: "wrti-jazz",
    matchNameIncludes: ["wrti"],
    countryCode: "US",
    preferredLabel: "WRTI",
    editorialDescription:
      "Philadelphia's dual classical and jazz service — jazz nights with a concert-hall heritage.",
    regionDescription: "East Coast public radio with a strong jazz block after dark.",
    listeningMood: "Philadelphia night session with a civic warmth.",
    atmosphereHint: "Schuylkill river lights",
    priorityScore: 7,
    location: { lat: 39.952, lng: -75.165 },
  },
  {
    id: "smooth-jazz-network",
    matchNameIncludes: ["smooth jazz network", "smoothjazznetwork"],
    preferredLabel: "Smooth Jazz Network",
    editorialDescription:
      "Polished smooth jazz for background focus and late-work listening.",
    regionDescription: "A continuous smooth-jazz lane with a glossy production sheen.",
    listeningMood: "Soft focus and steady rhythm.",
    atmosphereHint: "glass tower at dusk",
    priorityScore: 6,
  },
  {
    id: "jazz-radio",
    matchNameIncludes: ["jazz radio", "jazzradio"],
    preferredLabel: "Jazz Radio",
    editorialDescription:
      "European jazz radio brand with multiple mood channels under one umbrella.",
    regionDescription: "Continental jazz programming with channel-style variety.",
    listeningMood: "Stylish, varied, and always on.",
    atmosphereHint: "continental lounge",
    priorityScore: 6,
  },
];

export function applyCuratedStationLayer(station: Station): Station {
  const curated = findCuratedStation(station);
  if (!curated) return station;

  return {
    ...station,
    name: curated.preferredLabel,
    lat: curated.location?.lat ?? station.lat,
    lng: curated.location?.lng ?? station.lng,
    logoUrl: curated.logoUrl ?? station.logoUrl,
    editorialDescription: curated.editorialDescription ?? station.editorialDescription,
    regionDescription: curated.regionDescription ?? station.regionDescription,
    listeningMood: curated.listeningMood ?? station.listeningMood,
    atmosphereHint: curated.atmosphereHint ?? station.atmosphereHint,
    metadataCleanupPrefixes:
      curated.metadataCleanup?.removePrefixes ?? station.metadataCleanupPrefixes,
    verified: true,
    curatedStationId: curated.id,
    priorityScore: curated.priorityScore,
    metadataUrl: curated.metadataUrl,
    metadataFormat: curated.metadataFormat,
    curationScore: station.curationScore + curated.priorityScore,
  };
}

export function findCuratedStation(station: Pick<Station, "name" | "countryCode">) {
  const name = fold(station.name);
  const countryCode = station.countryCode?.toUpperCase();

  return CURATED_STATIONS.find((candidate) => {
    if (candidate.countryCode && candidate.countryCode !== countryCode) {
      return false;
    }
    return candidate.matchNameIncludes.some((needle) => name.includes(fold(needle)));
  });
}

function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
