// ============================================================
// VIEW: CalendarGrid.js — Approval schedule calendar
// Renders cells produced by the metrics controller.
// ============================================================
import React from 'react';
import { buildCalendarCells, CALENDAR_META } from '../controllers/metricsController';
import { DAY_LABELS } from '../models/metricsData';

const CalendarGrid = () => {
  const cells = buildCalendarCells();

  return (
    <div className="calendar-container">
      <p className="calendar-title">▸ {CALENDAR_META.label}</p>

      <div className="calendar-days-header">
        {DAY_LABELS.map(d => (
          <span key={d} className="cal-day-label">{d}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {cells.map(({ key, dayNum, isValid, isApproved, isToday }) => (
          <div
            key={key}
            className={`cal-day${isApproved ? ' approved' : ''}${isToday ? ' today' : ''}`}
            title={isValid ? `${CALENDAR_META.month} ${dayNum}${isApproved ? ' — Permit Approved' : ''}` : ''}
          >
            {!isApproved && isValid && (
              <span style={{
                fontSize: '0.52rem',
                color: isToday ? 'var(--cyan)' : 'rgba(255,255,255,0.3)',
              }}>
                {dayNum}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
