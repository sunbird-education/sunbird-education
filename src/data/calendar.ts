// ACADEMIC CALENDAR – SESSION 2025–26 (Indian School System)

export interface CalendarEvent {
  month: string;
  events: {
    date: string;
    title: string;
    description?: string;
    type: "holiday" | "exam" | "event" | "activity";
  }[];
}

// Academic year starts in April (Indian school system)
export const academicCalendar: CalendarEvent[] = [
  {
    month: "April 2025",
    events: [
      { date: "April 1", title: "New Academic Session Begins", type: "event" },
      { date: "April 14", title: "Dr. Ambedkar Jayanti (Holiday)", type: "holiday" },
      { date: "April 18", title: "Good Friday (Holiday)", type: "holiday" },
    ],
  },
  {
    month: "May 2025",
    events: [
      { date: "May 1", title: "Labour Day (Holiday)", type: "holiday" },
      { date: "May 12-16", title: "Unit Test – I", type: "exam" },
      { date: "May 25-31", title: "Summer Vacation Begins", type: "holiday" },
    ],
  },
  {
    month: "June 2025",
    events: [
      { date: "June 1-30", title: "Summer Vacation Continues", type: "holiday" },
    ],
  },
  {
    month: "July 2025",
    events: [
      { date: "July 1", title: "School Reopens After Summer Vacation", type: "event" },
      { date: "July 10", title: "Muharram (Holiday)", type: "holiday" },
      { date: "July 21-25", title: "Periodic Assessment – I", type: "exam" },
    ],
  },
  {
    month: "August 2025",
    events: [
      { date: "August 9", title: "Raksha Bandhan (Holiday)", type: "holiday" },
      { date: "August 15", title: "Independence Day Celebration", type: "event" },
      { date: "August 18-22", title: "Parent-Teacher Meeting", type: "activity" },
      { date: "August 26", title: "Janmashtami (Holiday)", type: "holiday" },
    ],
  },
  {
    month: "September 2025",
    events: [
      { date: "September 5", title: "Teachers’ Day Celebration", type: "event" },
      { date: "September 15-19", title: "Half-Yearly Examination", type: "exam" },
    ],
  },
  {
    month: "October 2025",
    events: [
      { date: "October 2", title: "Gandhi Jayanti (Holiday)", type: "holiday" },
      { date: "October 3-12", title: "Dussehra Vacation", type: "holiday" },
      { date: "October 20", title: "School Reopens After Dussehra Break", type: "event" },
    ],
  },
  {
    month: "November 2025",
    events: [
      { date: "November 1-3", title: "Diwali Vacation", type: "holiday" },
      { date: "November 14", title: "Children’s Day Celebration", type: "event" },
      { date: "November 24-28", title: "Unit Test – II", type: "exam" },
    ],
  },
  {
    month: "December 2025",
    events: [
      { date: "December 6", title: "Parent-Teacher Meeting", type: "activity" },
      { date: "December 25", title: "Christmas (Holiday)", type: "holiday" },
      { date: "December 26-31", title: "Winter Vacation", type: "holiday" },
    ],
  },
  {
    month: "January 2026",
    events: [
      { date: "January 1", title: "New Year (Holiday)", type: "holiday" },
      { date: "January 14", title: "Makar Sankranti (Holiday)", type: "holiday" },
      { date: "January 26", title: "Republic Day Celebration", type: "event" },
    ],
  },
  {
    month: "February 2026",
    events: [
      { date: "February 9-13", title: "Pre-Annual Examination", type: "exam" },
      { date: "February 18", title: "Maha Shivaratri (Holiday)", type: "holiday" },
      { date: "February 23-27", title: "Annual Sports Week", type: "activity" },
    ],
  },
  {
    month: "March 2026",
    events: [
      { date: "March 2-13", title: "Annual Examination", type: "exam" },
      { date: "March 8", title: "Holi (Holiday)", type: "holiday" },
      { date: "March 20", title: "Annual Day Function", type: "event" },
      {
        date: "March 31",
        title: "Result Declaration & Session Ends",
        description: "End of Academic Session 2025–26",
        type: "event",
      },
    ],
  },
];

// Downloadable PDF
export const calendarPdfUrl = "/downloads/academic-calendar-2025.pdf";

