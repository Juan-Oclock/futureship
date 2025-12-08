export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
  result: string;
  resultLabel: string;
  image: string;
  heroImage: string;
  metrics: CaseStudyMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "scaling-strategic-governance",
    client: "Global Fintech Corp",
    industry: "Financial Services",
    title: "Scaling Strategic Governance",
    description: "Facing aggressive fintech disruption, Global Fintech Corp needed to transform their traditional banking model while maintaining stakeholder confidence. We developed a phased digital transformation roadmap with clear milestones.",
    challenge: "Global Fintech Corp faced a critical inflection point. New digital-native competitors were rapidly capturing market share, while their traditional governance structures struggled to keep pace with the speed of change. The board recognized the need for transformation but lacked alignment on the path forward.",
    approach: "We facilitated a series of strategic workshops bringing together the board, executive team, and key stakeholders. Through structured dialogue and scenario planning, we helped the organization develop a shared understanding of the competitive landscape and build consensus around a phased transformation roadmap. Our approach emphasized maintaining governance integrity while enabling faster decision-making.",
    outcome: "The organization successfully navigated its digital transformation while strengthening rather than compromising its governance foundations. The new strategic framework enabled faster response to market changes while maintaining the oversight and accountability that stakeholders expected.",
    result: "40%",
    resultLabel: "Increase in New Market Revenue",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
    metrics: [
      { label: "Time to Market", value: "6 months faster" },
      { label: "Customer Retention", value: "95%" },
      { label: "Board Alignment", value: "100%" }
    ],
    testimonial: {
      quote: "The Way Forward helped us see beyond the immediate disruption to identify opportunities we hadn't considered. Their facilitation brought our board together in ways we hadn't achieved in years.",
      author: "Sarah Chen",
      role: "Chief Strategy Officer, Global Fintech Corp"
    }
  },
  {
    id: 2,
    slug: "unifying-council-strategy",
    client: "Metro City Council",
    industry: "Local Government",
    title: "Unifying Council Strategy",
    description: "A deeply divided council with competing priorities needed to align on a 10-year strategic vision. Through facilitated scenario planning and stakeholder workshops, we created a shared understanding of future challenges.",
    challenge: "Metro City Council was deeply divided along political and ideological lines. Previous attempts at long-term strategic planning had failed due to inability to build consensus. With major infrastructure decisions looming, the council needed to find common ground or risk paralysis.",
    approach: "Rather than starting with solutions, we began by helping councillors understand each other's underlying concerns and values. Through a series of facilitated sessions, we used scenario planning to explore multiple possible futures for the city. This shifted the conversation from competing positions to shared interests in the community's wellbeing.",
    outcome: "For the first time in over a decade, the council achieved unanimous agreement on a 10-year strategic vision. The process not only produced a robust plan but also transformed how councillors worked together, creating new norms of constructive dialogue.",
    result: "100%",
    resultLabel: "Council Approval Rate",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    metrics: [
      { label: "Stakeholder Sessions", value: "48" },
      { label: "Community Input", value: "15,000+" },
      { label: "Implementation Timeline", value: "On Track" }
    ],
    testimonial: {
      quote: "For the first time in a decade, we achieved unanimous agreement on our city's direction. The process transformed not just our strategy, but how we work together as a council.",
      author: "Mayor James Rodriguez",
      role: "Metro City Council"
    }
  },
  {
    id: 3,
    slug: "sustainability-as-strategy",
    client: "EcoRetail Giants",
    industry: "Retail",
    title: "Sustainability as Strategy",
    description: "Rising consumer expectations and regulatory pressure demanded a fundamental shift in supply chain practices. We mapped the entire value chain to identify sustainability opportunities that improved efficiency.",
    challenge: "EcoRetail Giants faced mounting pressure from consumers, investors, and regulators to demonstrate genuine commitment to sustainability. However, the leadership team was divided on whether sustainability was a cost center or a strategic opportunity. Supply chain complexity made it difficult to identify where to focus efforts.",
    approach: "We conducted a comprehensive value chain analysis, engaging stakeholders across the organization to map sustainability risks and opportunities. Through facilitated workshops, we helped the leadership team develop a shared understanding of how sustainability could drive competitive advantage rather than just compliance.",
    outcome: "The organization transformed its approach to sustainability from a compliance exercise to a core strategic differentiator. The new strategy not only reduced environmental impact but also improved operational efficiency and strengthened brand value.",
    result: "60%",
    resultLabel: "Reduction in Supply Chain Risk",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
    metrics: [
      { label: "Carbon Footprint", value: "-45%" },
      { label: "Supplier Compliance", value: "98%" },
      { label: "Brand Trust Score", value: "+32pts" }
    ],
    testimonial: {
      quote: "Sustainability isn't just good ethics anymore—it's become our strongest competitive differentiator. The Way Forward helped us see that clearly and build alignment across our leadership team.",
      author: "Maria Santos",
      role: "VP of Operations, EcoRetail Giants"
    }
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};
