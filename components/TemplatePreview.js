'use client';

/**
 * Template Preview Component
 * Renders a mini preview of templates for the /templates discovery page
 * Uses mock data and is independent of user data
 */

import { useRef } from 'react';
import MinimalTemplate from '@/components/templatesDesign/MinimalTemplate';
import DarkDevTemplate from '@/components/templatesDesign/DarkDevTemplate';
import GradientGlowTemplate from '@/components/templatesDesign/GradientGlowTemplate';
import CodeInspiredTemplate from '@/components/templatesDesign/CodeInspiredTemplate';
import PortfolioProTemplate from '@/components/templatesDesign/PortfolioProTemplate';
import CyberPunkTemplate from '@/components/templatesDesign/CyberPunkTemplate';

// Preview template map
const previewTemplateMap = {
  minimal: MinimalTemplate,
  dark: DarkDevTemplate,
  gradient: GradientGlowTemplate,
  code: CodeInspiredTemplate,
  portfolio: PortfolioProTemplate,
  cyber: CyberPunkTemplate,
};

// Mock user data for preview
const mockUserData = {
  handle: 'preview',
  pic: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740&q=80',
  desc: 'Your awesome bio goes here',
  links: [
    { link: '#', linktext: 'Link One' },
    { link: '#', linktext: 'Link Two' },
    { link: '#', linktext: 'Link Three' },
  ],
};

/**
 * TemplatePreviewCard - Renders a small preview of a template
 * @param {string} templateId - The template ID (minimal, dark, gradient, etc.)
 * @param {string} size - 'small' (card preview) or 'large' (modal preview)
 */
export function TemplatePreviewCard({ templateId, size = 'small' }) {
  const TemplateComponent = previewTemplateMap[templateId];

  if (!TemplateComponent) return null;

  const sizeClasses = {
    small: 'h-64 w-full',
    large: 'h-96 w-full',
  };

  return (
    <div
      className={`${sizeClasses[size]} overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-lg`}
    >
      <div className="scale-50 origin-top-left h-[200%] w-[200%]">
        <TemplateComponent user={mockUserData} />
      </div>
    </div>
  );
}

/**
 * TemplatePreviewModal - Full preview for modal (better sizing)
 */
export function TemplatePreviewModal({ templateId }) {
  const TemplateComponent = previewTemplateMap[templateId];

  if (!TemplateComponent) return null;

  return (
    <div className="w-full h-96 overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-lg relative">
      <div className="scale-50 origin-top-left h-[200%] w-[200%] pointer-events-none">
        <TemplateComponent user={mockUserData} />
      </div>
    </div>
  );
}

/**
 * Get all template previews
 */
export function getAllTemplatePreviews() {
  return Object.keys(previewTemplateMap);
}
