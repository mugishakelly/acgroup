  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import '../css/main.css';
  import './style/insights.css';
  import Image1 from '../asset/WhatsApp-Image-2020-05-20-at-12.40.04-PM-min.jpg';
  import Image2 from '../asset/PAS_8726-min-scaled.jpg';
  import Image3 from '../asset/IMG_4421.jpg';
  import Image4 from '../asset/Patrick-B-Nsenga.jpg';
  import Image5 from '../asset/IMG_4164-min-scaled.jpg';
  import Image6 from '../asset/IMG_4520-scaled.jpg';
  import moto from '../asset/moto.jpeg';


  function OurInsights() {
    const [email, setEmail] = useState('');

    // Insights data array - this would typically come from your backend
    const insightsList = [
      {
        id: 1,
        image: Image1,
        title: "AC Group to expand services beyond Kigali",
        description: "AC Group Ltd, a Rwandan tech firm providing smart transport solutions, last week unveiled plans to expand its operations...",
        date: "MAY 12",
        content: `
          <p>AC Group Ltd, a Rwandan tech firm providing smart transport solutions, last week unveiled plans to expand its operations beyond Kigali to other provinces in Rwanda and potentially to neighboring countries in the East African region.</p>
          
          <p>The company, known for its Tap&Go payment system that has revolutionized public transport in Kigali, is looking to leverage its success to bring efficient transport solutions to other urban centers.</p>
          
          <p>"We've seen tremendous success with our systems in Kigali, and we believe other cities can benefit from the same technology," said Patrick Buchana, CEO of AC Group. "Our expansion plans include rolling out our services to major towns in Rwanda before the end of the year, and we're already in talks with authorities in neighboring countries."</p>
          
          <h3>Addressing Regional Transport Challenges</h3>
          
          <p>The expansion comes at a time when many African cities are struggling with traffic congestion and inefficient public transport systems. AC Group's technology offers a solution by streamlining payment processes and providing data that can help optimize routes and schedules.</p>
          
          <p>The company's flagship product, the Tap&Go card, allows commuters to pay for bus rides electronically, eliminating the need for cash transactions and reducing boarding times. The system also collects valuable data on passenger numbers and peak travel times, which can be used to improve service delivery.</p>
          
          <p>"We're not just selling a payment solution; we're offering a comprehensive system that can transform how public transport operates," Buchana explained. "Our technology provides transport operators with insights that can help them make more informed decisions about fleet deployment and route planning."</p>
          
          <h3>Investment and Job Creation</h3>
          
          <p>As part of its expansion strategy, AC Group plans to invest in local talent and infrastructure in each new location it enters. The company estimates that its expansion could create hundreds of new jobs across the region, particularly in technology and customer service roles.</p>
          
          <p>"We believe in building local capacity," said Buchana. "When we enter a new market, we hire locally and provide training to ensure that our systems are maintained and supported by people who understand the local context."</p>
          
          <p>The company has already begun recruiting staff for its new operations in other Rwandan provinces and expects to be fully operational in these areas by the end of the year.</p>
          
          <h3>Future Prospects</h3>
          
          <p>Looking ahead, AC Group is also exploring opportunities to diversify its services beyond public transport. The company is considering how its technology could be applied to other sectors such as retail and services, where secure and efficient payment systems are in demand.</p>
          
          <p>"Our vision extends beyond transport," Buchana said. "We see ourselves as a technology company that can provide solutions to various sectors. Transport is just the beginning."</p>
          
          <p>With its ambitious expansion plans and commitment to innovation, AC Group is positioning itself as a leading technology provider in East Africa's rapidly evolving digital landscape.</p>
        `
      },
      {
        id: 2,
        image: moto,
        title: "AC Group invests Rwf3b in taxi moto solutions",
        description: "The company recently launched a smart solution for motorcycle taxis to improve payment systems and rider experience...",
        date: "MAY 12",
        content: `
          <p>AC Group, the technology company behind Rwanda's popular Tap&Go payment system, has invested 3 billion Rwandan francs (approximately $3 million) in developing and implementing digital solutions for the country's motorcycle taxi sector.</p>
          
          <p>The investment, announced at a press conference in Kigali, will go towards expanding the Tap&Go system to include motorcycle taxis, locally known as "motos," which are a popular mode of transport across Rwanda.</p>
          
          <h3>Transforming the Moto Sector</h3>
          
          <p>"Motos are an essential part of Rwanda's transport ecosystem, with thousands of operators serving millions of rides each month," said Patrick Buchana, CEO of AC Group. "Our investment aims to bring the same level of efficiency and transparency to the moto sector that we've achieved in bus transport."</p>
          
          <p>The new system will allow passengers to pay for moto rides using their existing Tap&Go cards or through a mobile app, eliminating the need for cash transactions. Moto operators will be equipped with small, weatherproof devices that can read the cards and process payments.</p>
          
          <p>For moto operators, the system offers several advantages, including secure income tracking, reduced risk of carrying cash, and access to financial services based on their transaction history.</p>
          
          <h3>Financial Inclusion for Operators</h3>
          
          <p>A significant aspect of the investment is focused on improving financial inclusion for moto operators, many of whom currently operate in the informal economy.</p>
          
          <p>"By digitizing payments, we're creating a financial footprint for moto operators, which can help them access loans and other financial services," explained Buchana. "We've already partnered with several financial institutions that are willing to offer products specifically designed for operators who use our system."</p>
          
          <p>The company has also reached agreements with insurance providers to offer more affordable coverage for moto operators who join the Tap&Go network.</p>
          
          <h3>Improving Safety and Efficiency</h3>
          
          <p>Beyond payments, the investment will also support the development of features aimed at improving safety and efficiency in the moto sector.</p>
          
          <p>The system will include GPS tracking capabilities, allowing for better monitoring of moto movements and creating potential safety benefits for both operators and passengers. It will also gather data on popular routes and peak times, which can help operators position themselves where demand is highest.</p>
          
          <p>"This is not just about payments; it's about creating a safer, more efficient transport system," said Buchana. "The data we collect can help authorities plan better infrastructure and regulations for the sector."</p>
          
          <h3>Rollout Plans</h3>
          
          <p>AC Group has already begun recruiting and training moto operators for a pilot phase of the project, which will involve around 1,000 motos in Kigali. The company plans to expand the system to include all registered moto operators in the city within a year, before extending to other parts of the country.</p>
          
          <p>To lead this new initiative, AC Group has appointed Malik Shaffy, former Head of Operations at Andela, as the director of its new Tap&Go Ride subsidiary.</p>
          
          <p>"This investment represents our commitment to innovation in all aspects of public transport," Buchana concluded. "We believe that by bringing digital solutions to the moto sector, we can create value for operators, passengers, and the broader economy."</p>
        `
      },
      {
        id: 3,
        image: Image6,
        title: "TapnGo and the myth that surrounds it",
        description: "AC Group's Tap&Go service has helped improve public transport efficiency. However, some myths still linger among users...",
        date: "MAY 12",
        content: `
          <p>Since its introduction in 2015, AC Group's Tap&Go payment system has transformed public transport in Rwanda, particularly in Kigali. However, despite its widespread adoption and benefits, several misconceptions continue to circulate about the service. This article aims to address some of these myths and provide clarity on how the system actually works.</p>
          
          <h3>Myth 1: "Tap&Go takes a large commission from bus fares"</h3>
          
          <p>One of the most persistent myths is that AC Group takes a significant percentage of each bus fare paid through the Tap&Go system, potentially reducing income for transport companies.</p>
          
          <p>"This is simply not true," explains Patrick Buchana, CEO of AC Group. "Our revenue model is based on a small service fee that is agreed upon with transport companies and approved by the regulator. We don't take a percentage of each fare."</p>
          
          <p>In fact, bus companies have reported increased revenue since adopting the Tap&Go system, primarily due to reduced leakage. Before digitization, companies were losing up to 20% of their revenue due to various inefficiencies and lack of transparency in cash collection.</p>
          
          <h3>Myth 2: "The WiFi on buses doesn't work"</h3>
          
          <p>Another common misconception relates to the WiFi service that AC Group provides on public buses. Some passengers believe that the service is non-functional or rarely works.</p>
          
          <p>"We understand why this perception exists," says Buchana. "Network connectivity can sometimes drop, just like it happens with mobile phones, but our technical team works around the clock to maintain connectivity."</p>
          
          <p>According to data from AC Group, buses in Kigali collectively use over 81.6 terabytes of data per month, suggesting that many passengers are indeed connecting to and using the WiFi service. The Rwanda Utilities Regulatory Authority (RURA) also monitors the service through a dashboard and regular inspections.</p>
          
          <h3>Myth 3: "Tap&Go cards expire and you lose your money"</h3>
          
          <p>Some users believe that unspent balances on Tap&Go cards expire after a certain period, causing them to lose their money.</p>
          
          <p>"This is not correct," Buchana clarifies. "The balance on your Tap&Go card never expires. You can leave it unused for years, and your money will still be there when you decide to use it again."</p>
          
          <p>The company has a card swap service that allows users to transfer balances from old or damaged cards to new ones, ensuring that no funds are lost. They're also launching a card personalization service that will make it easier to recover balances if cards are lost.</p>
          
          <h3>Myth 4: "The system frequently overcharges passengers"</h3>
          
          <p>Some passengers have reported being charged incorrect fares, leading to a perception that the system regularly overcharges users.</p>
          
          <p>"While no system is perfect, instances of incorrect charging are rare and usually due to specific technical issues that we address promptly," says Buchana. "Each validator shows the amount deducted and the new balance when a passenger taps, providing immediate transparency."</p>
          
          <p>AC Group also maintains customer service channels where users can report and resolve any payment discrepancies. The company is working on expanding these services to provide even more support to users.</p>
          
          <h3>Moving Forward with Transparency</h3>
          
          <p>To address these misconceptions and improve user understanding, AC Group is launching an awareness campaign to educate passengers about how the Tap&Go system works. The campaign will include informational materials in buses and at bus stops, as well as digital content distributed through social media.</p>
          
          <p>"We believe in transparency and want our users to fully understand the service they're using," Buchana emphasizes. "Most misconceptions arise from lack of information, so we're committed to improving our communication with the public."</p>
          
          <p>As the company expands its services to include intercity transport and motorcycle taxis, clear communication will be essential in ensuring that users feel confident in using the Tap&Go system across different modes of transport.</p>
        `
      },
      {
        id: 4,
        image: Image4,
        title: "New transport innovation",
        description: "Patrick B. Nsenga, CEO of AC Group, talks about innovation and leadership in Africa's transport technology landscape...",
        date: "MAY 12",
        content: `
          <p>In a rapidly evolving technological landscape, few sectors in Africa have seen as much innovation as public transport. At the forefront of this transformation is Patrick Buchana Nsenga, the Chief Executive Officer of AC Group, whose Tap&Go system has redefined how people pay for and use public transport in Rwanda.</p>
          
          <p>In an exclusive interview, Buchana shares his insights on leadership, innovation, and the future of transport technology in Africa.</p>
          
          <h3>The Journey to Digital Transport</h3>
          
          <p>"When we started AC Group in 2014, we were looking at a public transport system that was largely inefficient, with cash-based payments causing delays and revenue leakage for operators," Buchana recalls. "We saw an opportunity to apply technology to solve these challenges."</p>
          
          <p>The result was Tap&Go, a contactless payment system that allows passengers to pay for bus rides using smart cards. The system has since become ubiquitous in Kigali, with over 2 million cards in circulation and recent expansions to include intercity transport and motorcycle taxis.</p>
          
          <p>"The core of our innovation wasn't just digitizing payments," explains Buchana. "It was about creating an entire ecosystem that generates data, enables better decision-making, and ultimately improves the experience for all stakeholders in the transport system."</p>
          
          <h3>Leadership Philosophy</h3>
          
          <p>When asked about his leadership approach, Buchana emphasizes the importance of vision and adaptability.</p>
          
          <p>"As a leader in the technology space, particularly in Africa, you need to have a clear vision of the future you want to create, but also be incredibly adaptable in how you get there," he says. "The challenges we face are often unique to our context, and solutions that work elsewhere may not be directly applicable here."</p>
          
          <p>This philosophy has guided AC Group through various challenges, including the recent COVID-19 pandemic, which significantly impacted public transport operations.</p>
          
          <p>"When the pandemic hit, we had to pivot quickly," Buchana recounts. "We worked with authorities to implement contact tracing through our system and accelerated our development of cashless solutions to reduce physical contact during payments."</p>
          
          <h3>Innovation in an African Context</h3>
          
          <p>Buchana is passionate about the need for contextual innovation in Africa — solutions designed specifically for the unique challenges and opportunities of the continent.</p>
          
          <p>"Too often, there's a tendency to import solutions without adapting them to local realities," he observes. "At AC Group, we've always believed in building technology that addresses the specific needs of our users and operators within their economic and social context."</p>
          
          <p>This approach has led to innovations beyond just payment systems, including the development of WiFi services on buses and data analytics tools that help transport companies optimize their operations.</p>
          
          <p>"We're not just a payment company; we're a technology company focused on improving mobility," Buchana emphasizes. "That means looking at all aspects of the transport experience and finding ways to enhance them through technology."</p>
          
          <h3>The Future of Transport Technology</h3>
          
          <p>Looking ahead, Buchana envisions a future where transport becomes increasingly integrated and data-driven.</p>
          
          <p>"We're working on creating a seamless journey experience where passengers can plan, pay for, and navigate their entire trip across different modes of transport using a single platform," he explains. "This includes buses, motos, and potentially other forms of transport in the future."</p>
          
          <p>Data will play a crucial role in this vision, enabling more efficient route planning, dynamic scheduling, and personalized services for passengers.</p>
          
          <p>"The wealth of data we're collecting is incredibly valuable for urban planning and transport policy," Buchana notes. "We're already working with city authorities to use this data to inform infrastructure development and traffic management."</p>
          
          <h3>Advice for Emerging Innovators</h3>
          
          <p>When asked what advice he would give to young innovators and entrepreneurs in Africa, Buchana emphasizes the importance of solving real problems.</p>
          
          <p>"Focus on genuine problems that affect many people, and develop solutions that address these problems in practical, sustainable ways," he advises. "Success comes from creating value, not just from having a novel idea."</p>
          
          <p>He also stresses the importance of building strong teams and partnerships.</p>
          
          <p>"No significant innovation happens in isolation," Buchana concludes. "Surround yourself with talented people who share your vision but bring different skills and perspectives. And build partnerships with stakeholders across sectors — government, private companies, and civil society — because meaningful change requires collaboration."</p>
          
          <p>With this collaborative approach and a continued focus on contextual innovation, Buchana and AC Group are poised to further transform mobility in Rwanda and beyond, creating transport systems that are more efficient, accessible, and sustainable for all.</p>
        `
      },
      {
        id: 5,
        image: Image5,
        title: "Public transport systems",
        description: "AC Group is transforming how people commute in urban areas, with smart cards and digital solutions becoming the norm...",
        date: "MAY 12",
        content: `
          <p>The landscape of urban mobility in Rwanda has undergone a remarkable transformation over the past decade, with technology playing a pivotal role in reshaping how people move around cities. At the center of this evolution is AC Group's digital payment system, which has fundamentally changed the public transport experience for commuters and operators alike.</p>
          
          <h3>The Digital Transformation Journey</h3>
          
          <p>Prior to 2015, public transport in Kigali operated primarily on cash payments. Bus conductors collected fares from passengers, tickets were paper-based when used at all, and the system was prone to inefficiencies, revenue leakage, and unpredictable pricing.</p>
          
          <p>"The old system had numerous challenges," recalls Jean de Dieu Uwihanganye, a former State Minister for Transport. "Passengers often faced fluctuating prices, especially during peak hours or bad weather. Operators struggled with revenue management, and the city lacked reliable data on transport patterns to inform planning decisions."</p>
          
          <p>The introduction of AC Group's Tap&Go system marked the beginning of a new era. The contactless payment cards eliminated the need for cash transactions on buses, streamlining the boarding process and creating a more predictable fare structure for passengers.</p>
          
          <h3>Benefits for Commuters</h3>
          
          <p>For commuters, the digital transformation has brought numerous advantages. Fixed pricing means they can now budget accurately for their transport needs, without worrying about sudden fare increases during rush hours or inclement weather.</p>
          
          <p>"Before Tap&Go, I never knew exactly how much I would spend on transport each week," says Marie Uwimana, a regular bus commuter in Kigali. "Sometimes the fare would suddenly increase, and I'd have to walk part of my journey if I didn't have enough cash. Now, I know exactly what I'll pay, and I can load my card in advance."</p>
          
          <p>The system has also significantly reduced boarding times, as passengers simply tap their cards instead of fumbling for cash or waiting for change. This has improved journey times and reduced congestion at bus stops.</p>
          
          <p>Additionally, the introduction of WiFi on buses has transformed commute time into productive time for many passengers, who can now check emails, browse the internet, or handle online transactions during their journey.</p>
          
          <h3>Operational Improvements for Transport Companies</h3>
          
          <p>For bus operators, the digital system has addressed several critical challenges. Revenue leakage, which was estimated at up to 20% in some routes, has been virtually eliminated thanks to the transparent digital payment system.</p>
          
          <p>"The data we now collect allows us to make much more informed decisions about fleet management," explains James Ngabitsinze, Operations Manager at Kigali Bus Services (KBS). "We can see passenger numbers by route, time of day, and day of the week, which helps us optimize our schedule and deploy buses where they're most needed."</p>
          
          <p>This data-driven approach has improved efficiency and reduced costs for operators, while also enhancing service quality for passengers through better-planned routes and schedules.</p>
          
          <p>Furthermore, the digital payment system has created a financial history for transport companies, making it easier for them to access credit from financial institutions for fleet expansion or upgrades.</p>
          
          <h3>Urban Planning and Policy Benefits</h3>
          
          <p>Beyond the immediate benefits to commuters and operators, the digitization of public transport has generated valuable data that informs urban planning and transport policy.</p>
          
          <p>"The data from the Tap&Go system gives us insights into movement patterns across the city," says a senior urban planner at the City of Kigali. "This helps us identify areas where transport infrastructure needs to be improved, where new routes might be needed, and how to better integrate different modes of transport."</p>
          
          <p>This data-driven approach to urban planning represents a significant advancement for Kigali and other cities where similar systems are being implemented. It allows for more responsive and effective transport policies that can adapt to changing patterns of movement and demand.</p>
          
          <h3>Future Directions</h3>
          
          <p>As the digital transformation of public transport continues, AC Group is expanding its services to create an even more integrated and seamless transport experience.</p>
          
          <p>The recent expansion to include intercity transport and motorcycle taxis represents a step toward a comprehensive mobility ecosystem where passengers can use a single payment method across different modes of transport.</p>
          
          <p>"Our vision is for a commuter to be able to plan and pay for their entire journey in one go, regardless of whether it involves a bus, a moto, or potentially other forms of transport in the future," says Patrick Buchana, CEO of AC Group.</p>
          
          <p>The company is also working on enhancing its mobile app to provide real-time information on bus locations, estimated arrival times, and route planning, further improving the passenger experience.</p>
          
          <p>As these innovations continue to evolve, Rwanda's public transport system is increasingly being recognized as a model for other African cities seeking to improve mobility through technology-driven solutions.</p>
        `
      },
      {
        id: 6,
        image: Image3,
        title: "Smart public transport ecosystem",
        description: "With support from stakeholders, AC Group is building a fully integrated transport network powered by local innovation...",
        date: "MAY 12",
        content: `
          <p>In the heart of Rwanda's capital, a transport revolution is taking shape. AC Group, a local technology company, is spearheading the development of a fully integrated smart public transport ecosystem that is changing how people move around the city and beyond.</p>
          
          <p>With support from a diverse range of stakeholders, this ecosystem represents a significant step toward a more connected, efficient, and sustainable transport network.</p>
          
          <h3>The Vision of an Integrated Ecosystem</h3>
          
          <p>"Our goal is to create a transport system where all modes of public transport are connected not just physically, but digitally," explains Patrick Buchana, CEO of AC Group. "We want passengers to experience seamless transitions between different transport options, with a unified payment system and access to real-time information throughout their journey."</p>
          
          <p>This vision encompasses city buses, intercity coaches, and motorcycle taxis, with potential for expansion to include other transport modes in the future. At its core is the Tap&Go system, which serves as the digital backbone connecting these different elements.</p>
          
          <h3>Building the Ecosystem</h3>
          
          <p>Creating such a comprehensive ecosystem requires collaboration across multiple sectors. AC Group has been working closely with transport operators, government agencies, financial institutions, and telecommunications providers to build the necessary infrastructure and services.</p>
          
          <p>"No single entity can create this kind of ecosystem alone," Buchana emphasizes. "It requires partnership and alignment of interests across the public and private sectors."</p>
          
          <p>The Rwanda Utilities Regulatory Authority (RURA) has played a crucial role in facilitating this collaboration by establishing supportive regulatory frameworks that encourage innovation while ensuring consumer protection.</p>
          
          <p>Transport operators, initially skeptical about digitization, have become enthusiastic partners after seeing the benefits in terms of increased revenue, better fleet management, and improved customer satisfaction.</p>
          
          <p>Financial institutions have also come on board, offering products and services tailored to the needs of transport operators and commuters within the ecosystem. This includes loans for operators based on their digital transaction history and special savings products for regular commuters.</p>
          
          <h3>Key Components of the Ecosystem</h3>
          
          <p>The smart transport ecosystem comprises several interconnected components:</p>
          
          <p><strong>1. Digital Payment Infrastructure:</strong> The Tap&Go card and mobile payment options allow passengers to pay for transport services across different modes without using cash.</p>
          
          <p><strong>2. Data Collection and Analytics:</strong> Every transaction generates data that helps optimize routes, schedules, and fleet deployment, while also informing broader urban planning decisions.</p>
          
          <p><strong>3. Connectivity Solutions:</strong> WiFi services on buses keep passengers connected during their journeys, while also creating additional value for the transport experience.</p>
          
          <p><strong>4. Mobile Applications:</strong> The Tap&Go app provides users with account management features, journey planning tools, and real-time transport information.</p>
          
          <p><strong>5. Integration Platforms:</strong> Backend systems connect different transport operators and modes, enabling coordinated scheduling and interoperable payment solutions.</p>
          
          <h3>Impact and Benefits</h3>
          
          <p>The emerging ecosystem is already delivering significant benefits across multiple dimensions:</p>
          
          <p><strong>For Passengers:</strong> The integration of different transport modes means more convenience and predictability. A commuter can now use their Tap&Go card to pay for a bus into the city center, then use the same card for a moto ride to their final destination.</p>
          
          <p>"It's made my daily commute so much easier," says Jean Claude Mugabo, a bank employee in Kigali. "I don't have to worry about carrying cash for different parts of my journey, and I can plan my trips better with the information available on the app."</p>
          
          <p><strong>For Operators:</strong> Transport companies benefit from reduced cash handling costs, better insights into passenger behavior, and opportunities for service optimization.</p>
          
          <p><strong>For the City:</strong> Urban planners gain access to comprehensive mobility data that helps inform infrastructure development and policy decisions. The reduced congestion and improved transport efficiency also contribute to environmental benefits through lower emissions per passenger.</p>
          
          <h3>Future Directions</h3>
          
          <p>Building on the success of the current system, AC Group and its partners are exploring several avenues for further development of the ecosystem:</p>
          
          <p><strong>Integration with Other Services:</strong> Expanding the Tap&Go system to cover other urban services beyond transport, such as access to public facilities or payment for municipal services.</p>
          
          <p><strong>Enhanced Mobile Services:</strong> Developing more advanced mobile applications with features such as personalized journey recommendations, loyalty programs, and community engagement tools.</p>
          
          <p><strong>Sustainable Transport Options:</strong> Incorporating environmentally friendly transport modes into the ecosystem, including electric buses and possibly shared bicycles or scooters.</p>
          
          <p><strong>Regional Expansion:</strong> Extending the ecosystem to other cities in Rwanda and potentially to neighboring countries, creating regional transport networks with unified payment and information systems.</p>
          
          <p>"What we're building is not just about technology or transport," Buchana concludes. "It's about creating a new model for urban mobility that enhances quality of life, supports economic development, and contributes to sustainable cities. The support from stakeholders across sectors has been crucial in getting us this far, and will be even more important as we continue to expand and evolve the ecosystem."</p>
        `
      }
    ];

    const handleSubscribe = (e) => {
      e.preventDefault();
      // Handle subscription logic here
      console.log('Subscribing email:', email);
      // Reset the email input after submission
      setEmail('');
    };

    return (
      <div className="our-insights-page">
        <div className="container">
          <h1 className="page-title">Our Insights</h1>
          <p className="page-subtitle">
            AC Group is currently operational in Rwanda, Kigali and Cameroon, Yaounde.
          </p>

          <div className="insights-grid">
            {insightsList.map((insight) => (
              <Link 
                to={`/insights/${insight.id}`} 
                key={insight.id} 
                className="insight-card"
              >
                <div className="insight-image">
                  <img src={insight.image} alt={insight.title} />
                </div>
                <div className="insight-content">
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                  <div className="insight-date">{insight.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <section className="support-section">
          <div className="container">
            <div className="shape-left"></div>
            <div className="shape-right"></div>
            <div className="support-container">
              <div className="support-content">
                <h2 className="support-title">Get our stories delivered?</h2>
                <p className="support-text">From us to your inbox weekly.</p>
              </div>
              
              <form className="subscription-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  className="email-input" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="subscribe-button">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  export default OurInsights;