// utils/timeUtils.ts
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return interval === 1 ? `${interval} year ago` : `${interval} years ago`;
  }
  const months = Math.floor(seconds / 2592000);
  if (months >= 1) {
    return months === 1 ? `${months} month ago` : `${months} months ago`;
  }
  const days = Math.floor(seconds / 86400);
  if (days >= 1) {
    return days === 1 ? `${days} day ago` : `${days} days ago`;
  }
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours >= 1) {
    return minutes >= 1
      ? `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""} ago`
      : `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }
  if (minutes >= 1) {
    return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}
