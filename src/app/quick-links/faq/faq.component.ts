import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  faqs = [
    { question: 'What Is BridgeNET Fiber?', answer: 'BridgeNET Fiber is a high-speed internet service provider offering fiber-optic internet to residential areas, ensuring lightning-fast and reliable connectivity.', show: false },
    { question: 'What Internet Speeds Can I Expect?', answer: 'We offer various plans, including 1 Gig, 2.5 Gig, and 5 Gig options, catering to different needs. Speeds range up to 5 Gbps, depending on your chosen package.', show: false },
    { question: 'Do I Need To Purchase Special Equipment?', answer: 'BridgeNET Fiber provides all necessary equipment, including a fiber-optic compatible router, as part of our service package.', show: false },
    { question: 'How Reliable Is Fiber-Optic Internet During Bad Weather?', answer: 'Fiber-optic cables are less susceptible to weather and electromagnetic interference compared to traditional cables, ensuring more consistent and reliable service.', show: false },
    { question: 'Are There Any Contracts Or Commitments?', answer: 'Our plans are flexible with no long-term contracts, allowing you to change or cancel your service without hefty fees.', show: false },
    { question: 'What Does BridgeNET Mean? Why "Bridge"', answer: 'The word “bridge” embodies a remarkable blend of linguistic, symbolic, and technological meanings. Its versatility in language and its role in communications highlight the dynamic interplay between language, technology, and human connectivity. Exploration of the word “bridge” in its various forms reveals not only the richness of language but also the profound impact of technology in bridging gaps across different spheres of human activity.', show: false },
    { question: 'Is There A Data Cap On My Internet Usage?', answer: 'No, all BridgeNET Fiber plans come with unlimited data usage, ensuring you can stream, game, and download without worrying about data limits.', show: false },
    { question: 'What Are The Installation Costs And Processes?', answer: 'We offer free standard installation with each new subscription. Our team will schedule a convenient time to set up the service at your home.', show: false },
    { question: 'Can I Bundle My Internet With TV And Phone Services?', answer: 'Currently, BridgeNET Fiber specializes solely in providing high-speed fiber-optic internet. We don’t offer TV and phone bundles, allowing us to focus on delivering top-quality internet at competitive prices. This approach gives you the freedom to choose your preferred TV and phone services from a wide market range, ensuring you get the best deals and services tailored to your needs.', show: false },
    { question: 'What Support Services Are Available?', answer: 'We offer live, local customer support through phone, email, and live chat to address any concerns or technical issues promptly. When the customer support office is closed our network is still being monitored by our network operations center 24/7/365.', show: false },
    { question: 'How Do I Sign Up For BridgeNET Fiber?', answer: 'Signing up is easy! Visit our website to select your plan and schedule installation, or call our customer service for assistance.', show: false },
    
  ];

  toggleAnswer(index: number) {
    this.faqs[index].show = !this.faqs[index].show;
  }

}
