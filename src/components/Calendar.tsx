
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, subDays, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CalendarProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onSelectDate }) => {
  const [days, setDays] = useState<Date[]>(() => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => addDays(today, i - 3));
  });

  const navigateDays = (direction: 'prev' | 'next') => {
    const modifier = direction === 'prev' ? -7 : 7;
    const newDays = days.map(day => addDays(day, modifier));
    setDays(newDays);
  };

  const isToday = (date: Date) => {
    return isSameDay(date, new Date());
  };

  const isSelectedDay = (date: Date) => {
    return isSameDay(date, selectedDate);
  };

  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800">
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <button
          onClick={() => navigateDays('prev')}
          className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-white font-medium">Calendário de Jogos</h3>
        <button
          onClick={() => navigateDays('next')}
          className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4 flex justify-between">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => onSelectDate(day)}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              isSelectedDay(day)
                ? 'bg-sport-highlight text-gray-900'
                : 'hover:bg-gray-800'
            }`}
          >
            <span className={`text-xs ${isSelectedDay(day) ? 'text-gray-900' : 'text-gray-400'}`}>
              {format(day, 'EEE', { locale: ptBR })}
            </span>
            <span className={`text-lg font-bold ${isSelectedDay(day) ? 'text-gray-900' : 'text-white'}`}>
              {format(day, 'd')}
            </span>
            {isToday(day) && !isSelectedDay(day) && (
              <div className="h-1 w-1 bg-sport-highlight rounded-full mt-1"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
