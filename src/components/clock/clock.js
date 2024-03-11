import { format } from 'date-fns'

export default function clock() {
    let currentDate = format(new Date(), "dd/MM/yyyy");
    let currentQuarter = format(new Date(), "QQQ");
    let currentWeek = format(new Date(), "ww");
    let currentDay = format(new Date(), "EEEE");
    let currentTime = format(new Date(), "kk:mm:ss")

    let current = `Today is ${currentDay}, ${currentDate}, ${currentTime} | Quarter ${currentQuarter} | Week ${currentWeek}`

    return current
}