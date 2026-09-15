'use client';

import { useCallback, useEffect, useState } from 'react';
import type { SiteContent } from '@/lib/content-types';

export type AdminStatus = 'loading' | 'ready' | 'saving' | 'saved' | 'error';

export function useAdminContent() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [status, setStatus] = useState<AdminStatus>('loading');
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setStatus('loading');
    setError('');
    try {
      const response = await fetch('/api/admin/content', { cache: 'no-store' });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to load content');
      }
      setContent(data);
      setStatus('ready');
    } catch (loadError) {
      setStatus('error');
      setError(loadError instanceof Error ? loadError.message : 'Unable to load content');
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const save = useCallback(async (next = content) => {
    if (!next) return false;
    setStatus('saving');
    setError('');
    try {
      const response = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(next),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Unable to save content');
      }
      setContent(data);
      setStatus('saved');
      window.setTimeout(() => setStatus((current) => (current === 'saved' ? 'ready' : current)), 1800);
      return true;
    } catch (saveError) {
      setStatus('error');
      setError(saveError instanceof Error ? saveError.message : 'Unable to save content');
      return false;
    }
  }, [content]);

  return { content, setContent, status, error, load, save };
}
