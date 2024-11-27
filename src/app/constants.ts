const BREAKPOINTS = {
  mobileMax: 550,
  tabletMax: 1100,
};

export const QUERIES = {
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
};

export const BACKGROUND_MAPPING = {
  "/space-tourism": {
    mobile: "mobile",
    tablet: "tablet",
    desktop: "desktop",
  },
  "/space-tourism/destination": "whatever",
};
