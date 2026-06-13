// ============================================================
// MODEL: metricsData.js
// Static data for the three metrics dashboard cards:
//   1. Calendar approved days
//   2. Jurisdiction nodes + edges
//   3. Bar chart columns
// ============================================================

// ── Calendar (Card 1) ────────────────────────────────────────
/** Days of June 2026 that have approved permits */
export const APPROVED_DAYS = new Set([
  2, 3, 5, 7, 9, 10, 12, 14, 16, 17, 18, 21, 23, 24, 26, 28, 30,
]);

/** Day-of-week column headers */
export const DAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

/** Calendar metadata */
export const CALENDAR_META = {
  month: 'June',
  year: 2026,
  totalDays: 30,
  /** Monday = index 0, so June 2026 starts at offset 0 */
  startOffset: 0,
  totalCells: 35,
  /** Day to highlight as "today" */
  today: 14,
  label: 'Approval Schedule — Jun 2026',
};

// ── Jurisdiction Nodes (Card 2) ───────────────────────────────
/**
 * @typedef {Object} JurisdictionNode
 * @property {number} id
 * @property {number} x
 * @property {number} y
 * @property {string} label  State abbreviation
 */

/** @type {JurisdictionNode[]} */
export const JURISDICTION_NODES = [
  { id: 0,  x: 30,  y: 30,  label: 'CA' },
  { id: 1,  x: 85,  y: 18,  label: 'OR' },
  { id: 2,  x: 145, y: 22,  label: 'WA' },
  { id: 3,  x: 195, y: 35,  label: 'ID' },
  { id: 4,  x: 55,  y: 65,  label: 'NV' },
  { id: 5,  x: 115, y: 58,  label: 'UT' },
  { id: 6,  x: 170, y: 55,  label: 'WY' },
  { id: 7,  x: 220, y: 70,  label: 'MT' },
  { id: 8,  x: 35,  y: 100, label: 'AZ' },
  { id: 9,  x: 100, y: 95,  label: 'NM' },
  { id: 10, x: 160, y: 90,  label: 'CO' },
  { id: 11, x: 215, y: 105, label: 'TX' },
];

/** Node-index pairs that share an edge */
export const JURISDICTION_EDGES = [
  [0,1],[1,2],[2,3],[3,7],[7,6],[6,5],[5,4],[4,0],
  [0,4],[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],
  [8,9],[9,10],[10,11],[5,10],[4,9],
];

/** Animated packet routes (SVG animateMotion paths) */
export const PACKET_ROUTES = [
  {
    color: '#00F0FF',
    path: 'M30,30 L85,18 L145,22 L195,35 L220,70 L215,105',
    dur: '4s',
  },
  {
    color: '#39E5A5',
    path: 'M35,100 L55,65 L115,58 L170,55 L160,90 L215,105',
    dur: '5s',
  },
];

// ── Bar Chart (Card 3) ────────────────────────────────────────
/**
 * @typedef {Object} BarItem
 * @property {string} label    Multi-line label (use \n as separator)
 * @property {number} height   Pixel height of the bar (0–100)
 * @property {'bar-std'|'bar-hero'} type  Visual variant
 * @property {string} value    Dollar-value label shown above bar
 */

/** @type {BarItem[]} */
export const BAR_ITEMS = [
  { label: 'Permit\nExpedite', height: 52, type: 'bar-std',  value: '$12K'  },
  { label: 'Bond\nReduction',  height: 68, type: 'bar-std',  value: '$18K'  },
  { label: 'Appeal\nAvoided',  height: 44, type: 'bar-std',  value: '$9K'   },
  { label: 'Escrow\nSaved',    height: 88, type: 'bar-hero', value: '$50K+' },
];

export const BAR_CHART_META = {
  title: '▸ Delay Fee Savings Breakdown',
  xAxisLabel: 'FY 2024 – 2026',
};
