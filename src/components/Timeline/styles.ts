import styled from 'styled-components';

export const TimelineContainer = styled.div`
  background-color: var(--airtable-white);
  border-radius: var(--airtable-radius);
  box-shadow: var(--airtable-shadow);
  padding: 24px;
  border: 1px solid var(--airtable-border);
  width: 100%;
  overflow: visible;
`;

export const TimelineControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
  gap: 8px;
`;

export const ControlButton = styled.button`
  background-color: var(--airtable-white);
  color: var(--airtable-text);
  border: 1px solid var(--airtable-border);
  border-radius: var(--airtable-radius);
  width: 32px;
  height: 32px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--airtable-light-gray);
  }
`;

export const ScaleDisplay = styled.div`
  margin: 0 8px;
  font-size: 14px;
  color: var(--airtable-text);
`;

export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

export const TimelineHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(--airtable-border);
  margin-bottom: 12px;
  background-color: var(--airtable-light-gray);
  border-radius: var(--airtable-radius) var(--airtable-radius) 0 0;
`;

interface TimelineDateProps {
  width: string;
}

export const TimelineItemDates = styled.div`
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.65rem;
  color: #777;
  pointer-events: none;

  span:last-child {
    transform: translateX(30%);
  }

  span:first-child {
    transform: translateX(-30%);
  }

  margin: 0 6px;
`;

export const TimelineDate = styled.div<TimelineDateProps>`
  width: ${props => props.width};
  font-size: 1rem;
  color: var(--airtable-text);
  text-align: center;
  padding: 12px 0;
  overflow: visible;
  white-space: nowrap;
  font-weight: 500;
`;

export const MonthDivider = styled.div<{ left: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  left: ${props => props.left};
  border-left: 1px dashed #999;
  opacity: 0.8;
  pointer-events: none;
  z-index: 1;
`;

export const TimelineLanes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  position: relative;
`;

export const TimelineLane = styled.div`
  height: 40px;
  position: relative;
  background-color: var(--airtable-light-gray);
  border-radius: var(--airtable-radius);
`;

interface TimelineItemProps {
  left: string;
  width: string;
}

export const TimelineItem = styled.div<TimelineItemProps>`
  position: absolute;
  height: 100%;
  background-color: var(--airtable-blue);
  border-radius: var(--airtable-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--airtable-white);
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  cursor: pointer;

  &:hover {
    background-color: var(--airtable-blue-hover);
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const TimelineItemContent = styled.div`
  padding: 0 8px;
  font-size: 0.75rem;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

export const Tooltip = styled.div`
  position: absolute;
  background-color: var(--airtable-text);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  z-index: 12038120839021389021;
  top: -55px;
  right: -80px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  pointer-events: none;
  white-space: nowrap;
`;