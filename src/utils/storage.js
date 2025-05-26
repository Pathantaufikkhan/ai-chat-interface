    const STORAGE_KEY = 'ai-chat-history';

    export function saveMessages(messages) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }

    export function loadMessages() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
    }

    export function clearMessages() {
    localStorage.removeItem(STORAGE_KEY);
    }
