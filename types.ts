import React from 'react';

// Fix: Define and export LegalDocKey type for use in Footer and App components.
export type LegalDocKey = 'terms' | 'privacy' | 'cookies' | 'lgpd';

export interface Service {
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    benefits: string[];
}

export interface WhyUsPoint {
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    keyPoints: string[];
}

export interface LegalDoc {
    title: string;
    content: React.ReactNode;
}