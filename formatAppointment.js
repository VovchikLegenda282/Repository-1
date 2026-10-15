function formatAppointment(appointment) {
    return `Запись к врачу:
Врач: ${appointment.doctor}
Дата: ${appointment.date}
Время: ${appointment.time}
Пациент: ${appointment.patient}`;
}
const appointment = {
    doctor: "Иванов И.И.",
    date: "15.10.2026",
    time: "10:30",
    patient: "Алексей"
};
console.log(formatAppointment(appointment));
