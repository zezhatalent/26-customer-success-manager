import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Ishita Bose',
  role: 'Customer Success Manager',
  tagline: 'Helping customers grow, and stay',
  photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
  email: 'ishita@successquest.io',
  phone: '+91 90070 81234',
  location: 'Kolkata, India',
  languages: ['English', 'Hindi', 'Bengali'],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:' },
  ],
  about: [
    'I am a customer success manager who believes retention is a strategy, not an accident. I partner with customers to adopt, grow and renew — turning accounts into long-term advocates.',
    'I build onboarding journeys, health scores and renewal playbooks that keep value front and centre, so customers renew because they are getting real results.',
  ],
  services: [
    { title: 'Onboarding', desc: 'First-90-days journeys that get customers to their first win fast and measurably.', icon: '🚀' },
    { title: 'Health Scoring', desc: 'Signal-based risk models that surface struggling accounts before they fall quiet.', icon: '📊' },
    { title: 'Renewals & Retention', desc: 'Data-backed renewal cadence and win-back playbooks that protect the base.', icon: '🛡️' },
    { title: 'Expansion', desc: 'Upsell and cross-sell motions rooted in the customer&apos;s own usage and goals.', icon: '📈' },
    { title: 'Customer Advocacy', desc: 'Turning delighted accounts into references, reviews and referrals that feed pipeline.', icon: '🌟' },
    { title: 'Executive Business Reviews', desc: 'QBRs that connect product ROI to the outcomes leadership actually cares about.', icon: '🗣️' },
  ],
  skills: [
    { name: 'Onboarding', level: 95, note: 'Time-to-value' },
    { name: 'Account Health', level: 93, note: 'Scores & signals' },
    { name: 'Renewals', level: 92, note: 'Win-back & expansion' },
    { name: 'Advocacy', level: 90, note: 'NPS & referrals' },
    { name: 'Data & CRM', level: 88, note: 'Gainsight, CS tools' },
  ],
  skillsIcons: [
    { name: 'Onboarding', note: 'Fast time-to-value', icon: '🚀' },
    { name: 'Health Scoring', note: 'Proactive outreach', icon: '📊' },
    { name: 'Expansion', note: 'Cross-sell & upsell', icon: '📈' },
    { name: 'Retention', note: 'Churn prevention', icon: '🛡️' },
  ],
  stats: [
    { label: 'Account retention', value: 96, suffix: '%' },
    { label: 'NRR', value: 122, suffix: '%' },
    { label: 'Portfolio size', value: 60, suffix: '+ accounts' },
    { label: 'Churn reduced', value: 45, suffix: '%' },
  ],
  experience: [
    {
      role: 'Customer Success Manager',
      company: 'BrightLens',
      period: '2021 — Present',
      desc: 'Manage a portfolio of 60+ enterprise accounts, driving a 122% NRR and cutting logo churn by nearly half.',
    },
    {
      role: 'CSM — Mid Market',
      company: 'CloudNest',
      period: '2019 — 2021',
      desc: 'Built onboarding and health programs that lifted adoption and renewal across a growing mid-market base.',
    },
    {
      role: 'Success Associate',
      company: 'Pixelforge',
      period: '2018 — 2019',
      desc: 'Supported onboarding and customer communications, learning the craft of proactive value.',
    },
  ],
  education: [
    {
      degree: 'MBA — Marketing',
      school: 'Indian Institute of Management',
      period: '2016 — 2018',
      desc: 'Customer relationship management, service design and business analytics.',
    },
    {
      degree: 'B.A. Economics',
      school: 'Presidency College, Kolkata',
      period: '2013 — 2016',
      desc: 'Micro and macroeconomics with a focus on quantitative methods.',
    },
  ],
  certificates: [
    'Gainsight CSM Certification',
    'Customer Success Mindset (CSM-P)',
    'HubSpot & CRM Coursework',
    'Adoption & Onboarding Design',
  ],
  awards: [
    { title: 'CS Officer of the Year', detail: 'Highest portfolio NRR and customer satisfaction across the global success organisation.', year: '2023' },
    { title: 'NRR Achiever', detail: 'Delivered the top net revenue retention result across the mid-market team.', year: '2021' },
    { title: 'Customer Champion', detail: 'Named most trusted point-of-contact by the enterprise customer base.', year: '2019' },
  ],
  cards: [
    {
      title: 'Onboarding Engine',
      desc: 'Redesigned the first-90-days journey, lifting time-to-first-value 50% and boosting NPS 18 points.',
      stack: 'Onboarding · Playbook',
      metric: 'TTV -50%',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
    },
    {
      title: 'Renewal Playbook',
      desc: 'Introduced 90-day renewal cadence with health-based outreach, lifting portfolio NRR to 122%.',
      stack: 'Retention · Data',
      metric: '122% NRR',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
    },
    {
      title: 'Advocacy Program',
      desc: 'Turned top accounts into a reference and review engine that influenced 30% of new pipeline.',
      stack: 'Advocacy',
      metric: '+30% pipeline',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'Health Score Model',
      desc: 'A product-usage health model that predicts at-risk accounts 60 days early with 80% precision.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Data', 'Health Scoring'],
    },
    {
      title: 'CS Playbook Library',
      desc: 'Codified onboarding, QBR and renewal playbooks that cut new-hire ramp time from 3 months to 6 weeks.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop',
      tags: ['Playbooks', 'Onboarding'],
    },
    {
      title: 'Reference & Review Engine',
      desc: 'A structured advocacy loop that converted happy accounts into case studies and 40+ five-star reviews.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['Advocacy', 'Referrals'],
    },
  ],
  hobbies: [
    { name: 'Yoga', note: 'Daily practice', icon: '🧘' },
    { name: 'Pottery', note: 'Weekend studio sessions', icon: '🏺' },
    { name: 'Houseplants', note: 'Growing a green corner', icon: '🌿' },
    { name: 'Travel', note: 'Exploring new cuisines', icon: '✈️' },
  ],
  testimonials: [
    {
      quote:
        'Ishita treats our success like her own. Renewal was a yes long before the contract was on the table.',
      author: 'Anita Rao',
      role: 'COO, BrightLens customer',
    },
    {
      quote:
        'She knows our business as well as we do. The most proactive partner we have ever had.',
      author: 'Tom Alvarez',
      role: 'VP Ops, SaaS client',
    },
  ],
  footnote: '© Ishita Bose · React, TypeScript & Framer Motion',
  ticker: ['Onboarding', 'Health Scores', 'Renewals', 'Expansion', 'Advocacy', 'NRR'],

  blogPosts: [
    { title: 'Customer Health Scores: Building the Right Metrics', excerpt: 'How to create and use health scores to predict and prevent churn.', date: '2024-01-04', tags: ['Customer Success', 'Metrics'], readTime: '9 min' },
    { title: 'Onboarding Excellence: Setting Customers Up for Success', excerpt: 'Best practices for customer onboarding that drives adoption and retention.', date: '2023-12-23', tags: ['Onboarding', 'Retention'], readTime: '7 min' },
  ],

  faqItems: [
    { question: 'What is customer success?', answer: 'Customer success proactively ensures customers achieve their desired outcomes while using our product or service.' },
    { question: 'How do you prevent churn?', answer: 'I monitor health scores, conduct regular check-ins, and create success plans aligned with customer goals.' },
    { question: 'What tools do you use?', answer: 'I use Gainsight, Totango, Salesforce, and analytics platforms for customer success management.' },
    { question: 'How do you measure success?', answer: 'I track NRR, churn rate, expansion revenue, and customer health scores as key metrics.' },
  ],

  skillsDetailed: [
    { category: 'Customer Success', items: [
      { name: 'Account Management', level: 95 },
      { name: 'Retention Strategy', level: 92 },
      { name: 'Upselling', level: 88 },
    ]},
    { category: 'Analytics', items: [
      { name: 'Health Scoring', level: 90 },
      { name: 'Forecasting', level: 85 },
      { name: 'Reporting', level: 88 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'success@company.com', icon: '📧', href: 'mailto:success@company.com' },
    { type: 'Calendar', value: 'Book a meeting', icon: '📅', href: 'https://calendly.com' },
  ],
};