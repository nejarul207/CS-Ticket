import { Ticket } from '../types';

export const initialTickets: Ticket[] = [
  {
    id: '#001',
    title: 'Login Issues - Can\'t Access Account',
    description: 'Customer is unable to log into their account. They\'ve tried resetting their password multiple times but still cannot access their dashboard. The error message shows "Invalid credentials" even with the correct password.',
    customer: 'Liam Smith',
    priority: 'High',
    status: 'Open',
    createdAt: '11/10/2024'
  },
  {
    id: '#002',
    title: 'Payment Failed - Card Declined',
    description: 'Customer attempted to make a payment using their Visa card ending in 1234, but the payment keeps failing despite having sufficient balance in their account. They need immediate assistance.',
    customer: 'Sarah Jones',
    priority: 'High',
    status: 'Open',
    createdAt: '11/10/2024'
  },
  {
    id: '#003',
    title: 'Unable to Download Invoice',
    description: 'Customer cannot download their invoice from the billing section. The download button appears to be non-functional and clicking it doesn\'t trigger any download.',
    customer: 'Mark Brown',
    priority: 'Medium',
    status: 'Open',
    createdAt: '11/7/2024'
  },
  {
    id: '#004',
    title: 'Incorrect Billing Address',
    description: 'Customer\'s invoice shows a different billing address than what they have on file. They reported this issue but the address still displays the old information.',
    customer: 'Emily Davis',
    priority: 'Low',
    status: 'Open',
    createdAt: '11/8/2024'
  },
  {
    id: '#005',
    title: 'App Crash on Launch',
    description: 'Customer reports that the mobile application crashes immediately upon opening. They\'ve tried reinstalling the app but the issue persists on their device.',
    customer: 'David Wilson',
    priority: 'High',
    status: 'Open',
    createdAt: '11/9/2024'
  },
  {
    id: '#006',
    title: 'Refund Not Processed',
    description: 'Customer requested a refund two weeks ago but has not received any confirmation email or the actual refund amount in their account.',
    customer: 'Sophie Taylor',
    priority: 'Medium',
    status: 'Open',
    createdAt: '11/3/2024'
  },
  {
    id: '#007',
    title: 'Two-Factor Authentication Issue',
    description: 'Customer is not receiving 2FA verification codes on their registered phone number. They cannot complete the login process without these codes.',
    customer: 'James Anderson',
    priority: 'High',
    status: 'Open',
    createdAt: '11/1/2024'
  },
  {
    id: '#008',
    title: 'Unable to Update Profile Picture',
    description: 'Customer tries to upload a new profile picture but consistently gets an "Upload failed" error message. They\'ve tried different image formats and sizes.',
    customer: 'Olivia Martinez',
    priority: 'Low',
    status: 'Open',
    createdAt: '11/2/2024'
  },
  {
    id: '#009',
    title: 'Subscription Auto-Renewal Issue',
    description: 'Customer wants to enable auto-renewal for their subscription but the toggle switch appears to be disabled and unresponsive in their account settings.',
    customer: 'Liam Thomas',
    priority: 'Medium',
    status: 'Open',
    createdAt: '11/7/2024'
  },
  {
    id: '#010',
    title: 'Missing Order Confirmation Email',
    description: 'Customer placed an order and payment was successful, but they didn\'t receive a confirmation email. They need proof of purchase for their records.',
    customer: 'Isabella Garcia',
    priority: 'Medium',
    status: 'Open',
    createdAt: '11/4/2024'
  },
  {
    id: '#011',
    title: 'Account Suspension Appeal',
    description: 'Customer\'s account was suspended due to suspicious activity, but they claim it was legitimate usage. They want to appeal the decision and get their account reinstated.',
    customer: 'Noah Rodriguez',
    priority: 'High',
    status: 'Open',
    createdAt: '11/5/2024'
  },
  {
    id: '#012',
    title: 'Data Export Request',
    description: 'Customer wants to export all their personal data from the platform but the export function in settings is not working properly and fails to generate the file.',
    customer: 'Ava Johnson',
    priority: 'Low',
    status: 'Open',
    createdAt: '11/6/2024'
  }
];