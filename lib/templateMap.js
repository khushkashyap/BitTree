import MinimalTemplate from '@/components/templatesDesign/MinimalTemplate';
import DarkDevTemplate from '@/components/templatesDesign/DarkDevTemplate';
import GradientGlowTemplate from '@/components/templatesDesign/GradientGlowTemplate';
import CodeInspiredTemplate from '@/components/templatesDesign/CodeInspiredTemplate';
import PortfolioProTemplate from '@/components/templatesDesign/PortfolioProTemplate';
import CyberPunkTemplate from '@/components/templatesDesign/CyberPunkTemplate';

export const templateMap = {
  minimal: MinimalTemplate,
  dark: DarkDevTemplate,
  gradient: GradientGlowTemplate,
  code: CodeInspiredTemplate,
  portfolio: PortfolioProTemplate,
  cyber: CyberPunkTemplate,
};

export function getTemplate(templateId) {
  return templateMap[templateId] || MinimalTemplate;
}
