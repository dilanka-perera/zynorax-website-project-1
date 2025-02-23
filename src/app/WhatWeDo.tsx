'use client';

import React from 'react';
import TwoHalves from './TwoHalves';
import Topic from './Topic';
import { useData } from '@/contexts/DataContext';
import Image from 'next/image';

const WhatWeDo: React.FC = () => {
  const { websiteImages } = useData();

  return (
    <div className="pb-8 lg:pb-16">
      <div className="pt-10">
        <Topic text="What we do" />
      </div>

      <TwoHalves
        title="AI Solutions"
        imageSrc={`https:${
          websiteImages.find((item) => item.slug === 'home-ai-technology')
            ?.image || 'no.png'
        }`}
        imageFirst={true}
        content={
          <>
            <p>
              Harness the power of Artificial Intelligence to transform your
              business. From machine learning models to intelligent automation,
              we deliver custom AI-driven solutions that optimize your
              processes, improve decision-making, and create new growth
              opportunities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                {
                  slug: 'home-machine-learning',
                  title: 'Machine Learning Models',
                  description:
                    'Building predictive models to forecast trends and behaviors.',
                  bg: 'bg-slate-200',
                },
                {
                  slug: 'home-natural-language-processing',
                  title: 'Natural Language Processing (NLP)',
                  description:
                    'Improving communication through smart chatbots and voice assistants.',
                  bg: 'bg-slate-100',
                },
                {
                  slug: 'home-data-analytics',
                  title: 'Data Analytics & Insights',
                  description:
                    'Extracting valuable insights from your data to drive strategic decisions.',
                  bg: 'bg-slate-300',
                },
                {
                  slug: 'home-automation',
                  title: 'AI-driven Automation',
                  description:
                    'Streamlining business operations with AI-powered automation tools.',
                  bg: 'bg-slate-200',
                },
                {
                  slug: 'home-computer-vision',
                  title: 'Computer Vision',
                  description:
                    'Leverage AI to analyze and interpret visual data for enhanced business applications.',
                  bg: 'bg-slate-100',
                  center: true, // Custom flag for styling
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row space-x-6 p-6 ${item.bg} h-full min-h-[120px] ${
                    item.center
                      ? 'sm:col-span-2'
                      : 'lg:flex-col xl:flex-row lg:space-y-6 xl:space-y-0 lg:space-x-0 xl:space-x-6'
                  }`}
                >
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image
                      src={`https:${websiteImages.find((img) => img.slug === item.slug)?.image || 'no.png'}`}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-left text-base">
                      <strong>{item.title}:</strong>
                    </p>
                    <p className="text-left text-base pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />

      <TwoHalves
        title="Web Development"
        imageSrc={`https:${
          websiteImages.find((item) => item.slug === 'home-website-development')
            ?.image || 'no.png'
        }`}
        imageFirst={false}
        content={
          <>
            <p>
              From design to deployment, our web development services ensure
              that your online presence stands out. We focus on creating fast,
              secure, and user-friendly websites that scale with your business:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                {
                  slug: 'home-custom-web',
                  title: 'Custom Web Development',
                  description:
                    'Tailored solutions that align with your business goals.',
                  bg: 'bg-slate-200',
                },
                {
                  slug: 'home-responsive-design',
                  title: 'Responsive Design',
                  description:
                    'Ensuring an optimal experience across all devices.',
                  bg: 'bg-slate-100',
                },
                {
                  slug: 'home-ecommerce',
                  title: 'E-Commerce Solutions',
                  description:
                    'Building secure and feature-rich online stores.',
                  bg: 'bg-slate-300',
                },
                {
                  slug: 'home-maintenance',
                  title: 'Website Maintenance & Support',
                  description:
                    'Keeping your website updated, secure, and running smoothly.',
                  bg: 'bg-slate-200',
                },
                {
                  slug: 'home-performance',
                  title: 'Performance Optimization',
                  description:
                    'Enhance loading speed and user experience for better engagement.',
                  bg: 'bg-slate-100',
                  center: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row space-x-6 p-6 ${item.bg} h-full min-h-[120px] ${
                    item.center
                      ? 'sm:col-span-2'
                      : 'lg:flex-col xl:flex-row lg:space-y-6 xl:space-y-0 lg:space-x-0 xl:space-x-6'
                  }`}
                >
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image
                      src={`https:${websiteImages.find((img) => img.slug === item.slug)?.image || 'no.png'}`}
                      alt={item.title}
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-left text-base">
                      <strong>{item.title}:</strong>
                    </p>
                    <p className="text-left text-base pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

export default WhatWeDo;
