export interface TimelineItem {
  id: number;
  start: string;
  end: string;
  name: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export interface AppProps {
  items: TimelineItem[];
} 