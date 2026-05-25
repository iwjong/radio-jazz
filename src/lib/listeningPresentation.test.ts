import { describe, expect, it } from "vitest";
import { getListeningPresentation } from "./listeningPresentation";
import type { Station } from "./types";

describe("listening presentation", () => {
  it("keeps the empty state intentional and calm", () => {
    expect(getListeningPresentation(null, "idle")).toMatchObject({
      stateLabel: "Nothing playing",
      title: "Choose a station and let the room settle",
      subtitle: "A quiet world map of curated jazz stations is ready.",
    });
  });

  it("uses curated station atmosphere before technical details", () => {
    expect(
      getListeningPresentation(stationFixture(), "playing", "France"),
    ).toMatchObject({
      stateLabel: "Live",
      title: "TSF Jazz",
      subtitle:
        "Paris jazz radio with French and international repertoire and a café-concert spirit. · Verified",
      detail: "Candlelit bistro set.",
    });
  });

  it("names paused and blocked streams without sounding broken", () => {
    expect(getListeningPresentation(stationFixture(), "paused").detail).toBe(
      "Playback is held in a quiet listening state",
    );

    expect(
      getListeningPresentation(
        { ...stationFixture(), isSecureStream: false },
        "error",
      ),
    ).toMatchObject({
      stateLabel: "Legacy stream blocked",
      detail: "This HTTP stream may be blocked on secure deployments.",
    });
  });
});

function stationFixture(): Station {
  return {
    id: "tsf-jazz",
    name: "TSF Jazz",
    url: "https://example.com/stream.mp3",
    homepage: "",
    favicon: "",
    country: "France",
    countryCode: "FR",
    state: "",
    language: "french",
    tags: ["jazz"],
    codec: "AAC",
    bitrate: 192,
    votes: 1200,
    clickCount: 20,
    lat: 48.856,
    lng: 2.352,
    isSecureStream: true,
    curationScore: 12,
    verified: true,
    editorialDescription:
      "Paris jazz radio with French and international repertoire and a café-concert spirit.",
    listeningMood: "Candlelit bistro set.",
    regionDescription: "Left-bank listening with a conversational, vinyl-warm tone.",
  };
}
