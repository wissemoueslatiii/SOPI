const API_URL = import.meta.env.VITE_API_URL || '';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('auth_token');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options?.headers,
  };

  const res = await fetch(`${API_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || 'Request failed');
  }
  return res.json();
}

// --- Public ---
export const getApartments = (params?: Record<string, string>) => {
  const query = params ? '?' + new URLSearchParams(params).toString() : '';
  return request<any[]>(`/api/apartments${query}`);
};

export const getApartment = (projectId: string, idAppartement: string) =>
  request<any>(`/api/apartments/${projectId}/${idAppartement}`);

export const getProjects = () =>
  request<any[]>('/api/projects');

export const submitContact = (data: {
  fullName: string;
  phone: string;
  email: string;
  propertyType?: string;
  message?: string;
}) =>
  request<{ id: string }>('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const createLead = (data: {
  type: string;
  apartmentId?: string;
  projectId?: string;
  notes?: string;
  contactId?: string;
}) =>
  request<{ id: string }>('/api/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const sendAIMessage = (messages: any[], userMessage: string) =>
  request<{ reply: string }>('/api/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ messages, userMessage }),
  });

// --- Auth ---
export const login = (email: string, password: string) =>
  request<{ token: string; user: any }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

export const logout = () =>
  request<void>('/api/auth/logout', { method: 'POST' });

export const getMe = () =>
  request<any>('/api/auth/me');

// --- Admin ---
export const getContacts = () =>
  request<any[]>('/api/contacts');

export const getLeads = () =>
  request<any[]>('/api/leads');
