export const WHATSAPP_CONFIG = {
  displayNumber: '+91 88158 92213',
  e164Digits: '918815892213',
  baseUrl: 'https://wa.me/918815892213',
  defaultMessage:
    "Hi Pixelweldedits! I'm interested in discussing a video editing project. Let's connect.",
} as const;

export interface ProjectInquiryPayload {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export function buildWhatsAppUrl(message: string = WHATSAPP_CONFIG.defaultMessage): string {
  const cleanMessage = message.trim() || WHATSAPP_CONFIG.defaultMessage;
  return `${WHATSAPP_CONFIG.baseUrl}?text=${encodeURIComponent(cleanMessage)}`;
}

export function buildProjectInquiryMessage({
  name,
  email,
  projectType,
  message,
}: ProjectInquiryPayload): string {
  return [
    WHATSAPP_CONFIG.defaultMessage,
    '',
    `Full Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    `Project Type: ${projectType.trim()}`,
    `Project Brief: ${message.trim()}`,
  ].join('\n');
}
