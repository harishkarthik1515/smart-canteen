import { Student, AttendanceLog, Token, Notification } from '../types/dashboard';

export const mockStudents: Student[] = [
  {
    id: 'STU001',
    name: 'John Smith',
    class: '10',
    section: 'A',
    parentPhone: '+1234567890',
    registrationDate: '2024-01-15',
  },
  {
    id: 'STU002',
    name: 'Emma Johnson',
    class: '9',
    section: 'B',
    parentPhone: '+1234567891',
    registrationDate: '2024-01-16',
  },
  {
    id: 'STU003',
    name: 'Michael Brown',
    class: '11',
    section: 'A',
    parentPhone: '+1234567892',
    registrationDate: '2024-01-17',
  },
];

export const mockAttendanceLogs: AttendanceLog[] = [
  {
    id: 'LOG001',
    userId: 'STU001',
    timestamp: '2024-03-10T08:30:00',
    verificationMode: 'Face',
    status: 'Success',
    temperature: 36.5,
    maskStatus: true,
  },
  {
    id: 'LOG002',
    userId: 'STU002',
    timestamp: '2024-03-10T08:35:00',
    verificationMode: 'Fingerprint',
    status: 'Success',
    temperature: 36.7,
    maskStatus: true,
  },
  {
    id: 'LOG003',
    userId: 'STU003',
    timestamp: '2024-03-10T08:40:00',
    verificationMode: 'RFID',
    status: 'Failed',
    temperature: 36.8,
    maskStatus: false,
  },
];

export const mockTokens: Token[] = [
  {
    id: 'TOK001',
    studentId: 'STU001',
    timestamp: '2024-03-10T07:30:00',
    tokenNumber: 'BF001',
    mealType: 'Breakfast',
    status: 'Used',
  },
  {
    id: 'TOK002',
    studentId: 'STU002',
    timestamp: '2024-03-10T11:30:00',
    tokenNumber: 'LN001',
    mealType: 'Lunch',
    status: 'Unused',
  },
  {
    id: 'TOK003',
    studentId: 'STU003',
    timestamp: '2024-03-10T17:30:00',
    tokenNumber: 'DN001',
    mealType: 'Dinner',
    status: 'Unused',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: 'NOT001',
    studentId: 'STU001',
    parentPhone: '+1234567890',
    message: 'Your child John Smith has received a token for Breakfast.',
    status: 'Delivered',
    timestamp: '2024-03-10T07:31:00',
  },
  {
    id: 'NOT002',
    studentId: 'STU002',
    parentPhone: '+1234567891',
    message: 'Your child Emma Johnson has received a token for Lunch.',
    status: 'Delivered',
    timestamp: '2024-03-10T11:31:00',
  },
  {
    id: 'NOT003',
    studentId: 'STU003',
    parentPhone: '+1234567892',
    message: 'Failed to verify attendance for Michael Brown.',
    status: 'Failed',
    timestamp: '2024-03-10T08:41:00',
  },
];