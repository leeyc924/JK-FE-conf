'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs())
  const [selectedDates, setSelectedDates] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null]>([null, null])

  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'))
  }

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'))
  }

  const isDateInRange = (date: dayjs.Dayjs) => {
    if (!selectedDates[0] || !selectedDates[1]) return false
    return date.isAfter(selectedDates[0]) && date.isBefore(selectedDates[1])
  }

  const handleDateClick = (date: dayjs.Dayjs) => {
    if (!selectedDates[0] || (selectedDates[0] && selectedDates[1])) {
      setSelectedDates([date, null])
    } else {
      if (date.isBefore(selectedDates[0])) {
        setSelectedDates([date, selectedDates[0]])
      } else {
        setSelectedDates([selectedDates[0], date])
      }
    }
  }

  const renderCalendar = () => {
    const startDate = currentMonth.startOf('month').startOf('week')
    const endDate = currentMonth.endOf('month').endOf('week')
    const calendar = []

    let week = []
    let day = startDate

    while (day.isBefore(endDate) || day.isSame(endDate, 'day')) {
      const isCurrentMonth = day.month() === currentMonth.month()
      const isSelected = selectedDates[0]?.isSame(day, 'day') || selectedDates[1]?.isSame(day, 'day')
      const isInRange = isDateInRange(day)

      let bgColor = 'bg-white'
      let textColor = 'text-black'

      if (!isCurrentMonth) {
        bgColor = 'bg-[#ddd]'
        textColor = 'text-[#aaa]'
      } else if (isSelected) {
        bgColor = 'bg-[#006879]'
        textColor = 'text-white'
      } else if (isInRange) {
        bgColor = 'bg-[#A9EDFF]'
        textColor = 'text-white'
      }

      week.push(
        <button
          key={day.format('YYYY-MM-DD')}
          onClick={() => isCurrentMonth && handleDateClick(day)}
          className={`w-10 h-10 ${bgColor} ${textColor} rounded-full flex items-center justify-center ${
            isCurrentMonth ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          disabled={!isCurrentMonth}
        >
          {day.date()}
        </button>
      )

      if (week.length === 7) {
        calendar.push(
          <div key={day.format('YYYY-MM-DD')} className="flex justify-between">
            {week}
          </div>
        )
        week = []
      }

      day = day.add(1, 'day')
    }

    if (week.length > 0) {
      calendar.push(
        <div key={day.format('YYYY-MM-DD')} className="flex justify-between">
          {week}
        </div>
      )
    }

    return calendar
  }

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPreviousMonth} className="p-2">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">{currentMonth.format('MMMM YYYY')}</h2>
        <button onClick={goToNextMonth} className="p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="space-y-2">{renderCalendar()}</div>
    </div>
  )
}