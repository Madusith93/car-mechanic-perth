'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchContent, CmsContent } from '@/lib/cms';

interface CmsContextValue {
  content: CmsContent | null;
  loading: boolean;
}

const CmsContext = createContext<CmsContextValue>({ content: null, loading: true });

export function CmsProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<CmsContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetchContent().then((data) => {
      if (!active) return;
      setContent(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return <CmsContext.Provider value={{ content, loading }}>{children}</CmsContext.Provider>;
}

/** Read CMS content anywhere in the tree; returns null until it has loaded. */
export function useCms(): CmsContextValue {
  return useContext(CmsContext);
}
