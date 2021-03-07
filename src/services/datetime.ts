export const DisplayTime = (dateTime: Date): string => {
    const hours: number = dateTime.getHours() == 0 ? 12 :
        dateTime.getHours() > 12 ? dateTime.getHours() - 12 : dateTime.getHours();
    const minutes: number = dateTime.getMinutes();
    const timeSign: string = dateTime.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${timeSign}`;
};
