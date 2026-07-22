export function formatDate(
    date: string | Date
  ) {
    return new Intl.DateTimeFormat(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    ).format(new Date(date));
  }
  
  export function formatTime(
    date: string | Date
  ) {
    return new Intl.DateTimeFormat(
      "en-IN",
      {
        hour: "numeric",
        minute: "2-digit",
      }
    ).format(new Date(date));
  }