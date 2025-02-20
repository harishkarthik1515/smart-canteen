export interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  parentPhone: string;
  registrationDate: string;
}

export interface MetricCard {
  title: string;
  value: number | string;
  icon: React.ComponentType;
  trend?: number;
}

export interface AttendanceLog {
  id: string;
  userId: string;
  timestamp: string;
  verificationMode: 'Face' | 'Fingerprint' | 'RFID';
  status: 'Success' | 'Failed';
  temperature?: number;
  maskStatus?: boolean;
}

export interface Token {
  id: string;
  studentId: string;
  timestamp: string;
  tokenNumber: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner';
  status: 'Used' | 'Unused';
}

export interface Notification {
  id: string;
  studentId: string;
  parentPhone: string;
  message: string;
  status: 'Delivered' | 'Failed';
  timestamp: string;
}