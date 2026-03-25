import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Upload your product images and a model photo - our AI will do the rest.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Creation',
        desc: 'Get stunning videos in seconds with our powerful AI.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product short videos to life with AI-powered video synthesis.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Try our basic plan to see the power of AI video creation.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard quality videos',
            'No watermark',
            'Slow generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Creator and small teams.',
        credits: 80,
        features: [
            '80 Credits',
            'HD quality videos',
            'No watermark',
            'Video generation in minutes',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'Scale across your business with our most powerful plan.',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality videos',
            'No watermark',
            'Fast video generation in seconds',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does your AI video creation work?',
        answer: 'We leverage advanced machine learning models trained on millions of videos to generate new content. You simply upload your product images and a model photo, and our AI synthesizes them into stunning videos in seconds.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes, you can cancel your subscription at any time with no hidden fees.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes. You retain full ownership and commercial rights to all videos created with our platform.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'We support common image formats such as JPEG, PNG, and GIF for product images, and JPG or PNG for model photos.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];