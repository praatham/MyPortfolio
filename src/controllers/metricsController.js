// ============================================================
// CONTROLLER: metricsController.js
// Business logic / data-processing for the Metrics Dashboard.
// Views call these functions rather than manipulating raw model
// data themselves, preserving a clean separation of concerns.
// ============================================================

import {
  APPROVED_DAYS,
  CALENDAR_META,
  JURISDICTION_NODES,
  JURISDICTION_EDGES,
  PACKET_ROUTES,
  BAR_ITEMS,
  BAR_CHART_META,
} from '../models/metricsData';

// ── Calendar logic ────────────────────────────────────────────

/**
 * Generates the array of cell descriptors for the calendar grid.
 * Each cell is classified as approved, today, blank, or normal.
 *
 * @returns {{ key: number, dayNum: number, isValid: boolean, isApproved: boolean, isToday: boolean }[]}
 */
export const buildCalendarCells = () =>
  Array.from({ length: CALENDAR_META.totalCells }, (_, idx) => {
    const dayNum = idx - CALENDAR_META.startOffset + 1;
    const isValid    = dayNum >= 1 && dayNum <= CALENDAR_META.totalDays;
    const isApproved = isValid && APPROVED_DAYS.has(dayNum);
    const isToday    = dayNum === CALENDAR_META.today;
    return { key: idx, dayNum, isValid, isApproved, isToday };
  });

export { CALENDAR_META };

// ── Jurisdiction network logic ────────────────────────────────

/**
 * Returns enriched edge objects with both node coordinate objects
 * resolved, so the view only needs to iterate and render lines.
 *
 * @returns {{ id: string, x1: number, y1: number, x2: number, y2: number }[]}
 */
export const buildEdges = () =>
  JURISDICTION_EDGES.map(([aIdx, bIdx], i) => {
    const a = JURISDICTION_NODES[aIdx];
    const b = JURISDICTION_NODES[bIdx];
    return { id: `edge-${i}`, x1: a.x, y1: a.y, x2: b.x, y2: b.y };
  });

export { JURISDICTION_NODES, PACKET_ROUTES };

// ── Bar chart logic ───────────────────────────────────────────

/**
 * Returns bar items with an auto-computed animation delay based on
 * their index, so the view doesn't need to calculate timing itself.
 *
 * @returns {(import('../models/metricsData').BarItem & { animDelay: string })[]}
 */
export const getBarsWithDelay = () =>
  BAR_ITEMS.map((bar, i) => ({
    ...bar,
    animDelay: `${i * 0.15}s`,
  }));

export { BAR_CHART_META };
