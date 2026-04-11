// YYYY-MM-DD in the viewer's local timezone.
// Use this as the shared bucket key for "which day did X happen on"
// so the chart, the audit-list grouping, and the click filter all agree.
export function localDateKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function startOfLocalDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
