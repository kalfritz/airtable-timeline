import React, { useState, useEffect } from 'react';
import { assignLanes } from '../../assignLanes';
import Modal from './Modal';
import {
  TimelineContainer,
  TimelineWrapper,
  TimelineHeader,
  TimelineDate,
  TimelineLanes,
  TimelineLane,
  TimelineItem,
  TimelineItemContent,
  TimelineItemDates,
  Tooltip,
  MonthDivider
} from './styles';
import { TimelineProps, TimelineItem as TimelineItemType } from '../../types';
import { TEST_IDS } from '../../constants/testIds';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [lanes, setLanes] = useState<TimelineItemType[][]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [totalDays, setTotalDays] = useState<number>(0);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<TimelineItemType | null>(null);

  useEffect(() => {
    if (!items.length) return;
    
    const allDates = items.flatMap(item => [new Date(item.start), new Date(item.end)]);
    const earliest = new Date(Math.min(...allDates.map(d => d.getTime())));
    const latest = new Date(Math.max(...allDates.map(d => d.getTime())));
    
    setStartDate(earliest);
    setEndDate(latest);
    
    const days = Math.ceil((latest.getTime() - earliest.getTime()) / (86400000)) + 1;
    setTotalDays(days);
    
    setLanes(assignLanes(items));
  }, [items]);

  const getItemPosition = (item: TimelineItemType): { left: string; width: string; widthPercent: number } => {
    if (!startDate || !totalDays) return { left: '0%', width: '0%', widthPercent: 0 };

    const itemStart = new Date(item.start);
    const itemEnd = new Date(item.end);
    
    const startDays = Math.floor((itemStart.getTime() - startDate.getTime()) / 86400000);
    const durationDays = Math.max(1, Math.ceil((itemEnd.getTime() - itemStart.getTime()) / 86400000) + 1);
    
    const leftPercent = (startDays / totalDays) * 100;
    const widthPercent = (durationDays / totalDays) * 100;
    
    return {
      left: `${leftPercent}%`,
      width: `${widthPercent}%`,
      widthPercent
    };
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
      month: 'long'
    });
  };

  const formatItemDate = (date: Date): string => {
    return date.getDate().toString();
  };

  const showTooltip = (itemId: number) => setActiveItem(itemId);
  const hideTooltip = () => setActiveItem(null);

  const openModal = (item: TimelineItemType) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  const saveItemName = (newName: string) => {
    if (currentItem) {
      currentItem.name = newName;
      setLanes(assignLanes(items));
    }
  };

  const getMonthDividers = (): { left: string }[] => {
    if (!startDate || !totalDays) return [];
    
    const dividers: { left: string }[] = [];
    const date = new Date(startDate);
    
    date.setDate(date.getDate() + 1);
    
    for (let i = 1; i < totalDays; i++) {
      if (date.getDate() === 1) {
        const leftPercent = (i / totalDays) * 100;
        dividers.push({ left: `${leftPercent}%` });
      }
      date.setDate(date.getDate() + 1);
    }
    
    return dividers;
  };

  if (!startDate || !endDate || !totalDays) {
    return <TimelineContainer>Loading timeline...</TimelineContainer>;
  }

  return (
    <TimelineContainer>
      <TimelineWrapper>
        <TimelineHeader>
          {Array.from({ length: totalDays }, (_, i) => {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            
            const isFirstDay = i === 0;
            const isLastDay = i === totalDays - 1;
            const isFirstOfMonth = date.getDate() === 1;
            
            let showLabel = isFirstOfMonth || (isFirstDay && !isFirstOfMonth);
            if (isLastDay && !isFirstOfMonth) {
              const prevDate = new Date(date);
              prevDate.setDate(1);
              const lastShownDate = new Date(date);
              lastShownDate.setDate(1);
              showLabel = prevDate.getMonth() !== lastShownDate.getMonth();
            }
            
            return (
              <TimelineDate key={i} width={`${100 / totalDays}%`}>
                {showLabel ? formatDate(date) : ''}
              </TimelineDate>
            );
          })}
        </TimelineHeader>

        <TimelineLanes>
          {getMonthDividers().map((divider, index) => (
            <MonthDivider key={index} left={divider.left} />
          ))}
          {lanes.map((lane, laneIndex) => (
            <TimelineLane key={laneIndex}>
              {lane.map((item) => {
                const position = getItemPosition(item);
                const isActive = activeItem === item.id;
                const startDate = new Date(item.start);
                const endDate = new Date(item.end);
                const showEndDate = item.start !== item.end;
                
                return (
                  <TimelineItem
                    key={item.id}
                    left={position.left}
                    width={position.width}
                    onMouseEnter={() => showTooltip(item.id)}
                    onMouseLeave={hideTooltip}
                    onClick={() => openModal(item)}
                    data-testid={TEST_IDS.timelineItem}
                  >
                    <TimelineItemDates>
                      <span>{formatItemDate(startDate)}</span>
                      {showEndDate && <span>{formatItemDate(endDate)}</span>}
                    </TimelineItemDates>
                    <TimelineItemContent>
                      {item.name}
                    </TimelineItemContent>
                    
                    {isActive && (
                      <Tooltip data-testid={TEST_IDS.tooltip}>
                        {item.name}<br />
                        {new Date(item.start).toLocaleDateString()} - {new Date(item.end).toLocaleDateString()}
                      </Tooltip>
                    )}
                  </TimelineItem>
                );
              })}
            </TimelineLane>
          ))}
        </TimelineLanes>
      </TimelineWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveItemName}
        initialName={currentItem ? currentItem.name : ''}
      />
    </TimelineContainer>
  );
};

export default Timeline;
