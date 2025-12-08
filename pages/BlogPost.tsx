import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Share2, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/ui/Button';

// Blog data - in a real app this would come from a CMS or API
const blogPosts: Record<string, any> = {
  "future-of-strategic-governance": {
    title: "The Future of Strategic Governance in Uncertain Times",
    category: "Governance",
    date: "December 2, 2024",
    readTime: "5 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    excerpt: "How boards and leadership teams can navigate complexity while maintaining strategic clarity and collective decision-making.",
    content: `
      <p class="lead">In an era defined by unprecedented uncertainty, the traditional models of strategic governance are being put to the test. Boards and leadership teams must evolve their approaches to remain effective in navigating complexity.</p>

      <h2>The Changing Landscape</h2>
      <p>The past few years have demonstrated that disruption can come from anywhere—global pandemics, technological shifts, climate events, and geopolitical tensions. For organisations, this means that strategic planning can no longer be a once-a-year exercise conducted in isolation from operational realities.</p>

      <p>Forward-thinking boards are recognising that governance must become more adaptive, more inclusive, and more connected to the organisation's strategic sensing capabilities.</p>

      <h2>Key Principles for Modern Governance</h2>

      <h3>1. Embrace Collective Intelligence</h3>
      <p>The most effective boards leverage the diverse perspectives of their members. This means creating space for open dialogue, encouraging constructive dissent, and ensuring that all voices are heard before major decisions are made.</p>

      <h3>2. Build Strategic Awareness</h3>
      <p>Governance bodies need regular exposure to emerging trends, potential disruptions, and alternative future scenarios. This isn't about predicting the future—it's about building the organisational capacity to respond effectively to whatever emerges.</p>

      <h3>3. Focus on Decision Quality</h3>
      <p>Rather than trying to make perfect decisions, effective governance focuses on making good decisions quickly and learning from outcomes. This requires clear decision-making frameworks and a culture that values transparency over certainty.</p>

      <blockquote>
        "The goal isn't to eliminate uncertainty—it's to build the collective capability to navigate it with confidence."
      </blockquote>

      <h2>Practical Steps Forward</h2>
      <p>For boards and leadership teams looking to strengthen their strategic governance, we recommend starting with these practical steps:</p>

      <ul>
        <li><strong>Conduct a governance health check</strong> - Assess how well your current structures support adaptive decision-making</li>
        <li><strong>Invest in scenario planning</strong> - Build shared understanding of potential futures and their implications</li>
        <li><strong>Create space for strategic dialogue</strong> - Ensure board meetings include time for open exploration, not just reporting</li>
        <li><strong>Develop decision-making protocols</strong> - Clarify how different types of decisions should be made and by whom</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>The organisations that thrive in uncertain times will be those with governance structures that enable rather than constrain adaptive strategy. This requires ongoing investment in the capabilities, relationships, and processes that support effective collective decision-making.</p>

      <p>At The Way Forward, we partner with boards and leadership teams to build these capabilities through facilitated workshops, scenario planning exercises, and ongoing advisory relationships.</p>
    `
  },
  "building-consensus-leadership-teams": {
    title: "Building Consensus in Diverse Leadership Teams",
    category: "Leadership",
    date: "November 28, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Practical frameworks for facilitating open dialogue and finding common ground when perspectives differ.",
    content: `
      <p class="lead">Diversity of thought is one of the greatest assets a leadership team can have—but only if that diversity can be channelled into aligned action. Building genuine consensus requires more than just voting or compromise.</p>

      <h2>Why Consensus Matters</h2>
      <p>When leadership teams make decisions through genuine consensus rather than majority rule or executive decree, the resulting decisions tend to be better implemented, more sustainable, and more widely supported throughout the organisation.</p>

      <p>However, achieving consensus in diverse teams is challenging. Different backgrounds, experiences, and mental models can lead to fundamentally different views on the same issue.</p>

      <h2>The Consensus-Building Framework</h2>
      
      <h3>Step 1: Create Psychological Safety</h3>
      <p>Before any meaningful dialogue can occur, team members must feel safe to express dissenting views without fear of judgment or retribution. This requires intentional effort from leaders to model vulnerability and welcome challenge.</p>

      <h3>Step 2: Separate Positions from Interests</h3>
      <p>Often, apparent disagreements are actually about different solutions to the same underlying concern. By exploring the interests behind stated positions, teams can often find creative solutions that address everyone's core needs.</p>

      <h3>Step 3: Use Structured Dialogue</h3>
      <p>Unstructured discussion tends to favour the most vocal participants. Structured dialogue techniques ensure all perspectives are heard and considered systematically.</p>

      <blockquote>
        "Consensus doesn't mean everyone gets their first choice—it means everyone can live with and support the decision."
      </blockquote>

      <h2>Common Pitfalls to Avoid</h2>
      <ul>
        <li><strong>False consensus</strong> - When people agree publicly but disagree privately</li>
        <li><strong>Groupthink</strong> - When the desire for harmony overrides critical evaluation</li>
        <li><strong>Analysis paralysis</strong> - When the pursuit of perfect consensus prevents any decision</li>
        <li><strong>Premature closure</strong> - When teams rush to agreement before fully exploring options</li>
      </ul>

      <h2>Building Long-term Capability</h2>
      <p>Consensus-building is a skill that improves with practice. Teams that regularly engage in structured dialogue develop shared language, trust, and the ability to navigate disagreement productively.</p>
    `
  },
  "scenario-planning-local-government": {
    title: "Scenario Planning for Local Government",
    category: "Foresight",
    date: "November 20, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Why councils need to embrace strategic foresight to prepare for demographic shifts and climate challenges.",
    content: `
      <p class="lead">Local governments face a unique challenge: they must plan for the long term while responding to immediate community needs. Scenario planning offers a powerful approach to bridging this gap.</p>

      <h2>The Case for Foresight in Local Government</h2>
      <p>Councils are responsible for infrastructure, services, and planning decisions that will shape communities for decades. Yet traditional planning approaches often assume a relatively stable future—an assumption that recent events have thoroughly challenged.</p>

      <p>Demographic shifts, climate change, technological disruption, and changing community expectations all create uncertainty that councils must navigate.</p>

      <h2>What is Scenario Planning?</h2>
      <p>Scenario planning is not about predicting the future. Instead, it's about developing multiple plausible futures and using them to stress-test strategies, identify early warning signs, and build organisational adaptability.</p>

      <h3>Key Elements of Effective Scenarios</h3>
      <ul>
        <li><strong>Plausibility</strong> - Scenarios must be believable, even if challenging</li>
        <li><strong>Distinctiveness</strong> - Each scenario should represent a genuinely different future</li>
        <li><strong>Relevance</strong> - Scenarios must connect to the decisions councils actually face</li>
        <li><strong>Challenge</strong> - Good scenarios push thinking beyond comfort zones</li>
      </ul>

      <h2>A Practical Approach for Councils</h2>
      
      <h3>Phase 1: Identify Key Uncertainties</h3>
      <p>What are the major forces that could shape your community's future? These might include population growth, economic diversification, climate impacts, or technological change.</p>

      <h3>Phase 2: Develop Scenario Frameworks</h3>
      <p>Select two or three critical uncertainties and use them to create a matrix of possible futures. Each quadrant represents a distinct scenario to explore.</p>

      <h3>Phase 3: Flesh Out the Narratives</h3>
      <p>For each scenario, develop a rich narrative that describes what life in the community would look like. Include implications for council services, infrastructure, and governance.</p>

      <blockquote>
        "The value of scenarios isn't in their accuracy—it's in the conversations they enable and the preparedness they build."
      </blockquote>

      <h2>From Scenarios to Strategy</h2>
      <p>The real power of scenario planning comes from using scenarios to inform strategy. This includes identifying robust strategies that work across multiple scenarios, developing contingency plans, and establishing monitoring systems for early warning signs.</p>
    `
  },
  "collective-intelligence-organizations": {
    title: "Harnessing Collective Intelligence in Organizations",
    category: "Leadership",
    date: "November 15, 2024",
    readTime: "8 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600",
    excerpt: "How to tap into the wisdom of crowds within your organization to make better decisions and foster innovation.",
    content: `
      <p class="lead">Organizations possess a remarkable untapped resource: the collective intelligence of their people. Yet most traditional hierarchies and decision-making processes actively suppress rather than harness this valuable asset.</p>

      <h2>What is Collective Intelligence?</h2>
      <p>Collective intelligence refers to the shared or group intelligence that emerges from collaboration, competition, and individual decision-making. When properly harnessed, it can lead to insights and solutions that no single individual could generate alone.</p>

      <p>The principle isn't new—markets, ant colonies, and human societies have demonstrated collective intelligence for millennia. What's new is our growing understanding of how to systematically cultivate it within organizations.</p>

      <h2>Barriers to Collective Intelligence</h2>
      <h3>1. Hierarchical Decision-Making</h3>
      <p>Traditional organizational structures concentrate decision-making authority at the top, effectively filtering out diverse perspectives and local knowledge that exists throughout the organization.</p>

      <h3>2. Fear of Dissent</h3>
      <p>When challenging ideas or questioning assumptions carries personal or professional risk, collective intelligence suffers. The most valuable insights often come from constructive disagreement.</p>

      <h3>3. Information Silos</h3>
      <p>Departments and teams operating in isolation prevent the cross-pollination of ideas and perspectives that fuels collective intelligence.</p>

      <h2>Building Collective Intelligence</h2>
      <h3>Design for Diversity</h3>
      <p>Actively seek out diverse perspectives when solving problems. This includes functional diversity, cognitive diversity, and experiential diversity. The goal isn't just representation—it's genuine integration of different viewpoints.</p>

      <h3>Create Psychological Safety</h3>
      <p>People must feel safe to share unconventional ideas, admit ignorance, and challenge prevailing wisdom. Leadership plays a crucial role in modeling vulnerability and rewarding intellectual courage.</p>

      <h3>Use Structured Processes</h3>
      <p>Unstructured brainstorming often fails to produce quality insights. Structured approaches like Delphi methods, prediction markets, and anonymous idea generation can help level the playing field and surface the best thinking.</p>

      <blockquote>
        "The smartest organizations aren't those with the smartest individuals—they're those that are best at combining the intelligence of all their people."
      </blockquote>

      <h2>Practical Applications</h2>
      <p>Organizations can begin building collective intelligence through specific practices:</p>
      <ul>
        <li><strong>Cross-functional problem-solving teams</strong> with clear decision-making authority</li>
        <li><strong>Internal prediction markets</strong> for forecasting business outcomes</li>
        <li><strong>Anonymous suggestion systems</strong> that surface ideas regardless of hierarchy</li>
        <li><strong>Regular "devil's advocate" rotations</strong> in strategic planning</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Building collective intelligence isn't just about making better decisions—it's about creating an organization that learns, adapts, and innovates continuously. The organizations that thrive in complex, rapidly changing environments will be those that successfully harness the full intelligence of their people.</p>
    `
  },
  "strategic-foresight-technological-disruption": {
    title: "Strategic Foresight in the Age of AI Disruption",
    category: "Foresight",
    date: "November 8, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Preparing your organization for the transformative impact of artificial intelligence and automation.",
    content: `
      <p class="lead">Artificial intelligence represents not just another technological shift, but a fundamental reorganization of how work happens, value is created, and competitive advantage is achieved. Organizations that approach AI with traditional technology adoption strategies will be left behind.</p>

      <h2>Beyond Digital Transformation</h2>
      <p>Most organizations have spent the last decade pursuing digital transformation—digitizing existing processes and operations. AI requires something different: cognitive transformation. It's not just about doing things faster; it's about doing fundamentally different things.</p>

      <p>The distinction matters because AI isn't just a tool—it's a collaborator, an analyst, a creator, and increasingly, a strategist. This requires rethinking everything from organizational structure to competitive strategy to workforce development.</p>

      <h2>Strategic Imperatives for the AI Era</h2>
      <h3>1. Redefine Value Creation</h3>
      <p>AI shifts value creation from human execution to human judgment and creativity. Organizations need to identify where humans create unique value versus where AI can augment or replace human capabilities.</p>

      <h3>2. Build Adaptive Capability</h3>
      <p>AI capabilities are evolving exponentially. Organizations need the ability to rapidly adopt new AI capabilities and reconfigure operations around them. This requires flexible architectures and continuous learning cultures.</p>

      <h3>3. Address Ethical Implications</h3>
      <p>From algorithmic bias to workforce displacement, AI raises profound ethical questions. Organizations need robust frameworks for responsible AI development and deployment.</p>

      <h2>Scenario Planning for AI Futures</h2>
      <p>Given the uncertainty around AI's evolution, scenario planning becomes essential. We typically explore four distinct futures:</p>

      <h3>Scenario 1: Augmented Intelligence</h3>
      <p>AI primarily enhances human capabilities, leading to productivity gains but relatively stable organizational structures. The focus is on human-AI collaboration and upskilling.</p>

      <h3>Scenario 2: Automated Operations</h3>
      <p>AI automates most routine operations, dramatically reducing headcounts in traditional roles while creating new roles in AI management and oversight.</p>

      <h3>Scenario 3: AI-Driven Innovation</h3>
      <p>AI becomes a primary driver of innovation, with organizations competing based on their ability to leverage AI for creativity and problem-solving.</p>

      <h3>Scenario 4: Disruptive Transformation</h3>
      <p>AI fundamentally reshapes industries, creating entirely new business models while rendering traditional ones obsolete.</p>

      <blockquote>
        "The question isn't whether AI will transform your organization—it's whether your organization will be transformed by AI or transform itself with AI."
      </blockquote>

      <h2>Practical Steps for Leaders</h2>
      <h3>Start with Experiments</h3>
      <p>Launch focused AI experiments across different functions to build organizational learning and identify high-impact applications.</p>

      <h3>Invest in AI Literacy</h3>
      <p>Ensure leaders and employees understand AI capabilities, limitations, and implications. This includes both technical literacy and ethical awareness.</p>

      <h3>Redesign Work Processes</h3>
      <p>Rather than simply adding AI to existing processes, redesign processes around human-AI collaboration. This often means eliminating steps, adding new oversight mechanisms, and redefining roles.</p>

      <h2>The Path Forward</h2>
      <p>Success in the AI era requires both strategic clarity and organizational agility. Organizations need a clear vision for how AI creates competitive advantage while maintaining the flexibility to adapt as AI capabilities evolve.</p>

      <p>At The Way Forward, we help leadership teams navigate this uncertainty through scenario planning, capability development, and strategic roadmapping that prepares organizations for multiple AI futures.</p>
    `
  },
  "decision-making-under-uncertainty": {
    title: "Decision Making Under Uncertainty: A Leader's Guide",
    category: "Governance",
    date: "October 30, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Practical tools and frameworks for making high-quality decisions when information is incomplete.",
    content: `
      <p class="lead">Leadership in the 21st century is defined by the ability to make high-quality decisions in environments of extreme uncertainty. Traditional decision-making approaches often fail when the future is unclear, information is incomplete, and stakes are high.</p>

      <h2>The Challenge of Uncertainty</h2>
      <p>Most leaders are trained to make decisions based on complete information, clear cause-and-effect relationships, and predictable outcomes. Yet the environments we face today are characterized by ambiguity, rapid change, and interconnected systems where small actions can have outsized consequences.</p>

      <p>This creates a fundamental tension: we need to make decisions, but we lack the information we'd ideally like to have. The result is often decision paralysis, analysis delays, or decisions based on incomplete or flawed assumptions.</p>

      <h2>A Framework for Decision Under Uncertainty</h2>
      <h3>1. Assess the Type of Uncertainty</h3>
      <p>Not all uncertainty is the same. Understanding the nature of uncertainty helps determine the appropriate approach:</p>
      <ul>
        <li><strong>Risk</strong>: Known probabilities and outcomes (can use traditional analytical approaches)</li>
        <li><strong>Uncertainty</strong>: Known possible outcomes but unknown probabilities</li>
        <li><strong>Ambiguity</strong>: Unknown possible outcomes and probabilities</li>
        <li><strong>Black Swans</strong>: Unknown unknowns—events we can't even imagine</li>
      </ul>

      <h3>2. Match Approach to Uncertainty</h3>
      <p>Different types of uncertainty require different decision-making approaches:</p>

      <p><strong>For Risk</strong>: Use quantitative analysis, expected value calculations, and risk management frameworks.</p>

      <p><strong>For Uncertainty</strong>: Use scenario planning, sensitivity analysis, and flexible strategies that work across multiple outcomes.</p>

      <p><strong>For Ambiguity</strong>: Use experimentation, prototyping, and iterative learning approaches.</p>

      <p><strong>For Black Swans</strong>: Focus on resilience, adaptive capacity, and early warning systems.</p>

      <h2>Practical Decision Tools</h2>
      <h3>Pre-mortem Analysis</h3>
      <p>Before making a decision, imagine it has failed spectacularly. Work backward to identify what went wrong. This helps surface risks and assumptions that might otherwise be missed.</p>

      <h3>Options Thinking</h3>
      <p>Instead of committing fully to one course of action, create and preserve options. This means making decisions that maintain flexibility and allow for course correction as more information becomes available.</p>

      <h3>Red Teaming</h3>
      <p>Assign a team to actively challenge the proposed decision and advocate for alternatives. This helps overcome groupthink and confirmation bias.</p>

      <h3>Bayesian Updating</h3>
      <p>Treat decisions as hypotheses to be tested. Gather evidence and update your assessment as new information becomes available, being willing to change course if evidence suggests you're wrong.</p>

      <blockquote>
        "Good decisions under uncertainty aren't about being right—they're about being less wrong over time through continuous learning and adaptation."
      </blockquote>

      <h2>Building Decision Capability</h2>
      <h3>Create Decision Buffers</h3>
      <p>Build time, resource, and strategic buffers into your plans. When unexpected events occur, these buffers provide the flexibility to respond without compromising core objectives.</p>

      <h3>Develop Early Warning Systems</h3>
      <p>Identify leading indicators that signal when assumptions are proving incorrect or when the environment is changing in unexpected ways.</p>

      <h3>Cultivate Psychological Safety</h3>
      <p>People need to feel safe raising concerns, challenging assumptions, and admitting when decisions aren't working out as expected.</p>

      <h2>The Role of Leadership</h2>
      <p>Under uncertainty, leadership shifts from providing answers to asking good questions. It shifts from making perfect decisions to creating learning organizations. It shifts from controlling outcomes to building adaptive capacity.</p>

      <p>This requires a different kind of leadership confidence—one based not on having all the answers, but on trusting the organization's collective intelligence to navigate uncertainty together.</p>

      <h2>Moving Forward</h2>
      <p>The organizations that thrive in uncertain times will be those that embrace uncertainty as a permanent condition rather than a temporary problem to be solved. They will build decision-making processes that are iterative, adaptive, and learning-oriented.</p>

      <p>At The Way Forward, we help leadership teams develop these capabilities through facilitated decision-making processes, scenario planning exercises, and ongoing support for navigating complexity and uncertainty.</p>
    `
  },
  "adaptive-leadership-change-management": {
    title: "Adaptive Leadership: Thriving Through Constant Change",
    category: "Leadership",
    date: "October 22, 2024",
    readTime: "9 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Why traditional change management fails and how adaptive leadership approaches create sustainable transformation.",
    content: `
      <p class="lead">Most change management initiatives fail because they treat change as a one-time event rather than a continuous process. In today's rapidly evolving business environment, organizations need leaders who can build adaptive capacity rather than just manage discrete change projects.</p>

      <h2>The Failure of Traditional Change Management</h2>
      <p>Traditional change management typically follows a linear model: analyze the current state, design a future state, create a plan, communicate it, execute it, and measure results. This approach assumes:</p>
      <ul>
        <li>The future can be accurately predicted</li>
        <li>Change can be fully designed in advance</li>
        <li>Resistance is primarily a communication problem</li>
        <li>Once change is implemented, it stays implemented</li>
      </ul>

      <p>None of these assumptions hold true in today's complex, rapidly changing environments. The result is change initiatives that either fail to deliver results or, worse, succeed temporarily before organizations revert to previous behaviors.</p>

      <h2>The Adaptive Leadership Alternative</h2>
      <p>Adaptive leadership, developed by Ronald Heifetz and Marty Linsky at Harvard, treats change as an ongoing process of learning and adaptation rather than a one-time event. It recognizes that many challenges are adaptive rather than technical—they require changes in values, beliefs, and behaviors, not just new procedures or systems.</p>

      <h3>Technical vs. Adaptive Challenges</h3>
      <p><strong>Technical challenges</strong> have known solutions that can be implemented by experts. They require authority, expertise, and traditional management approaches.</p>

      <p><strong>Adaptive challenges</strong> require new learning, changes in values and beliefs, and experimentation. They can't be solved by experts alone—they require the engagement and learning of the people facing the challenge.</p>

      <h2>Principles of Adaptive Leadership</h2>
      <h3>1. Get on the Balcony</h3>
      <p>Leaders need to step back from day-to-day operations to observe patterns and dynamics. This "balcony perspective" helps identify adaptive challenges versus technical problems and understand the deeper dynamics at play.</p>

      <h3>2. Identify the Adaptive Challenge</h3>
      <p>Distinguish between technical problems that can be solved with existing knowledge and adaptive challenges that require new learning. This means asking: "What would it take to solve this problem?" If the answer requires people to change their values, beliefs, or behaviors, it's an adaptive challenge.</p>

      <h3>3. Regulate Distress</h3>
      <p>Adaptive work creates tension and stress. Too little distress, and people won't be motivated to change. Too much, and they become overwhelmed. Leaders need to maintain an optimal level of productive distress.</p>

      <h3>4. Give the Work Back to the People</h3>
      <p>For adaptive challenges, leaders can't provide the answers—they need to create the conditions for people to find solutions themselves. This means asking tough questions, encouraging experimentation, and creating space for learning.</p>

      <h3>5. Protect Voices of Leadership from Below</h3>
      <p>Adaptive change often challenges existing power structures and assumptions. Leaders need to protect people who raise uncomfortable truths or propose challenging ideas.</p>

      <blockquote>
        "Adaptive leadership mobilizes people to tackle tough challenges and thrive. The goal isn't to lead change—it's to create the conditions for adaptive work to happen."
      </blockquote>

      <h2>Practical Applications</h2>
      <h3>Digital Transformation</h3>
      <p>Most digital transformations fail because they're treated as technical challenges—implementing new systems and processes. The adaptive challenge is helping people develop new mindsets, skills, and ways of working in a digital environment.</p>

      <h3>Cultural Change</h3>
      <p>Culture can't be changed through edicts or programs. It requires changing the underlying values, beliefs, and assumptions that drive behavior. This is fundamentally adaptive work.</p>

      <h3>Strategic Pivots</h3>
      <p>When organizations need to fundamentally change their business model, they face adaptive challenges around identity, purpose, and capability development.</p>

      <h2>Building Adaptive Capacity</h2>
      <h3>Create Learning Laboratories</h3>
      <p>Establish safe spaces for experimentation where failures are treated as learning opportunities. This builds organizational comfort with uncertainty and change.</p>

      <h3>Develop Distributed Leadership</h3>
      <p>Adaptive capacity requires leadership at all levels, not just at the top. This means developing leadership skills throughout the organization and empowering people to take initiative.</p>

      <h3>Build Reflective Practices</h3>
      <p>Create regular opportunities for teams to reflect on what's working, what's not, and what they're learning. This builds meta-learning—the ability to learn about learning.</p>

      <h3>Cultivate Strategic Patience</h3>
      <p>Adaptive change takes time. Leaders need to balance urgency with patience, recognizing that meaningful change happens through multiple iterations and experiments.</p>

      <h2>The Role of Senior Leaders</h2>
      <p>In adaptive leadership, senior leaders shift from being the source of answers to being the architects of adaptive processes. Their key responsibilities include:</p>
      <ul>
        <li>Identifying adaptive challenges versus technical problems</li>
        <li>Creating and protecting spaces for adaptive work</li>
        <li>Managing conflict and productive dissent</li>
        <li>Providing perspective and direction without dictating solutions</li>
        <li>Role modeling vulnerability and learning</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>In a world of constant change, organizations that thrive will be those that build adaptive capacity rather than just executing discrete change projects. This requires a fundamental shift in how we think about leadership, change, and organizational development.</p>

      <p>At The Way Forward, we help leadership teams develop adaptive leadership capabilities through facilitated processes, coaching, and ongoing support for navigating complex challenges.</p>
    `
  },
  "municipal-innovation-climate-resilience": {
    title: "Building Climate Resilience in Municipal Planning",
    category: "Foresight",
    date: "October 15, 2024",
    readTime: "6 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1600",
    excerpt: "How local governments can integrate climate resilience into long-term planning and infrastructure decisions.",
    content: `
      <p class="lead">Local governments are on the front lines of climate change, yet many struggle to integrate climate resilience into their planning processes effectively. The challenge isn't just technical—it's about transforming how councils think about risk, time horizons, and community wellbeing.</p>

      <h2>The Climate Resilience Imperative</h2>
      <p>Climate change is no longer a future problem—it's a present reality for local governments. From extreme weather events to gradual environmental changes, councils face mounting pressure to protect their communities while planning for increasingly uncertain futures.</p>

      <p>Traditional approaches to climate adaptation often focus on technical solutions and infrastructure upgrades. While important, these approaches miss the deeper organizational changes needed to build true climate resilience.</p>

      <h2>Beyond Infrastructure: Organizational Resilience</h2>
      <p>Climate resilience requires more than sea walls and stormwater systems—it requires organizational resilience. This means:</p>
      <ul>
        <li>Long-term thinking beyond electoral cycles</li>
        <li>Cross-departmental collaboration</li>
        <li>Community engagement and partnership</li>
        <li>Adaptive governance structures</li>
        <li>Learning-oriented decision-making</li>
      </ul>

      <h2>Strategic Foresight for Climate Planning</h2>
      <h3>Scenario-Based Planning</h3>
      <p>Traditional climate planning often relies on single projections of future conditions. Scenario-based planning helps councils consider multiple plausible futures and develop strategies that are robust across different scenarios.</p>

      <p>Key climate scenarios might include:</p>
      <ul>
        <li><strong>Best Case</strong>: Rapid decarbonization, moderate temperature rise, effective international cooperation</li>
        <li><strong>Business as Usual</strong>: Continued reliance on fossil fuels, significant temperature rise, fragmented climate response</li>
        <li><strong>Worst Case</strong>: Limited climate action, high temperature rise, major ecosystem disruptions</li>
        <li><strong>Surprise Scenario</strong>: Unexpected climate tipping points or technological breakthroughs</li>
      </ul>

      <h3>Backcasting from Desired Futures</h3>
      <p>Rather than extrapolating from current conditions, councils can work backward from desired future states. This helps identify the actions needed today to achieve climate-resilient communities in 2050 and beyond.</p>

      <h2>Integrating Climate Resilience Across Council Functions</h2>
      <h3>Land Use Planning</h3>
      <p>Climate considerations need to be central to land use decisions:</p>
      <ul>
        <li>Restricting development in high-risk areas</li>
        <li>Designing climate-resilient subdivisions</li>
        <li>Preserving natural buffers and ecosystems</li>
        <li>Planning for gradual population shifts</li>
      </ul>

      <h3>Infrastructure Investment</h3>
      <p>Infrastructure decisions have 50-100 year time horizons. Climate resilience requires:</p>
      <ul>
        <li>Building redundancy and flexibility into systems</li>
        <li>Designing for multiple climate scenarios</li>
        <li>Considering life cycle costs rather than upfront costs</li>
        <li>Phased implementation that allows for adaptation</li>
      </ul>

      <h3>Community Services</h3>
      <p>Climate change affects all community services:</p>
      <ul>
        <li>Emergency services planning for extreme weather</li>
        <li>Public health considerations for heat waves and air quality</li>
        <li>Parks and recreation designed for climate resilience</li>
        <li>Community facilities with climate-adaptive features</li>
      </ul>

      <blockquote>
        "Climate-resilient planning isn't just about protecting against risk—it's about creating communities that thrive in a changing climate."
      </blockquote>

      <h2>Building Adaptive Governance</h2>
      <h3>Early Warning Systems</h3>
      <p>Councils need systems to identify climate-related risks early:</p>
      <ul>
        <li>Environmental monitoring and data collection</li>
        <li>Community-based observation networks</li>
        <li>Regular climate risk assessments</li>
        <li>Integration with emergency management systems</li>
      </ul>

      <h3>Decision-Making Under Uncertainty</h3>
      <p>Climate planning requires making decisions with incomplete information:</p>
      <ul>
        <li>No-regret strategies that provide benefits regardless of climate outcomes</li>
        <li>Flexible options that preserve future choices</li>
        <li>Experimentation and learning approaches</li>
        <li>Regular review and adaptation of strategies</li>
      </ul>

      <h3>Collaborative Governance</h3>
      <p>Climate resilience requires collaboration across boundaries:</p>
      <ul>
        <li>Partnerships with neighboring councils</li>
        <li>Collaboration with state and federal agencies</li>
        <li>Engagement with Indigenous communities</li>
        <li>Private sector and community partnerships</li>
      </ul>

      <h2>Community Engagement and Communication</h2>
      <h3>Building Climate Literacy</h3>
      <p>Effective climate resilience requires an informed community:</p>
      <ul>
        <li>Clear communication about local climate risks</li>
        <li>Educational programs about climate adaptation</li>
        <li>Accessible data and information</li>
        <li>Regular reporting on climate initiatives</li>
      </ul>

      <h3>Co-Creation of Solutions</h3>
      <p>Community members have valuable knowledge and insights:</p>
      <ul>
        <li>Participatory planning processes</li>
        <li>Community-led climate initiatives</li>
        <li>Local knowledge integration</li>
        <li>Neighborhood-level resilience planning</li>
      </ul>

      <h2>Measuring and Monitoring Progress</h2>
      <h3>Climate Resilience Indicators</h3>
      <p>Councils need to track progress toward climate resilience:</p>
      <ul>
        <li>Risk reduction metrics</li>
        <li>Adaptive capacity indicators</li>
        <li>Community resilience measures</li>
        <li>Implementation tracking for climate actions</li>
      </ul>

      <h3>Adaptive Management</h3>
      <p>Regular review and adaptation of climate strategies:</p>
      <ul>
        <li>Annual climate resilience assessments</li>
        <li>Strategy updates based on new information</li>
        <li>Learning from climate events and responses</li>
        <li>Continuous improvement of adaptation measures</li>
      </ul>

      <h2>The Path Forward</h2>
      <p>Building climate resilience is a marathon, not a sprint. It requires sustained commitment, organizational learning, and adaptive approaches. The councils that succeed will be those that treat climate resilience as a core strategic priority rather than an add-on to existing processes.</p>

      <p>At The Way Forward, we help councils develop climate resilience strategies through scenario planning, stakeholder engagement, and capacity building that prepares organizations for a changing climate.</p>
    `
  },
  "board-dynamics-effective-governance": {
    title: "The Dynamics of Effective Board Governance",
    category: "Governance",
    date: "October 8, 2024",
    readTime: "7 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Understanding the interpersonal dynamics that enable boards to function at their highest level.",
    content: `
      <p class="lead">High-performing boards aren't just collections of talented individuals—they're dynamic social systems where interpersonal relationships, communication patterns, and psychological factors determine effectiveness. Understanding these dynamics is crucial for building truly effective governance.</p>

      <h2>Beyond Structure: The Human Element</h2>
      <p>Most board improvement efforts focus on structural elements: composition, charters, committees, and processes. While important, these structural elements only create the potential for effective governance. The actual performance depends on how board members interact, communicate, and make decisions together.</p>

      <p>The boards that truly excel are those that understand and intentionally manage their interpersonal dynamics. They recognize that governance is fundamentally a human activity, subject to the same psychological and social forces that affect any group endeavor.</p>

      <h2>Key Dynamics of Board Effectiveness</h2>
      <h3>1. Psychological Safety</h3>
      <p>Board members must feel safe to express dissenting views, ask fundamental questions, and challenge conventional wisdom. Without psychological safety, boards fall prey to groupthink and fail to surface crucial issues.</p>

      <p>Creating psychological safety requires:</p>
      <ul>
        <li>Explicit norms encouraging constructive dissent</li>
        <li>Leadership modeling vulnerability and openness</li>
        <li>Protection for directors who challenge consensus</li>
        <li>Structured processes that ensure all voices are heard</li>
      </ul>

      <h3>2. Cognitive Diversity</h3>
      <p>Effective boards leverage diverse mental models, experiences, and perspectives. This goes beyond demographic diversity to include differences in how board members think about problems, evaluate options, and assess risk.</p>

      <p>Cognitive diversity requires:</p>
      <ul>
        <li>Intentional board composition strategies</li>
        <li>Valuing different thinking styles and approaches</li>
        <li>Creating space for diverse perspectives to emerge</li>
        <li>Avoiding premature convergence on single solutions</li>
      </ul>

      <h3>3. Constructive Conflict</h3>
      <p>High-performing boards engage in vigorous debate while maintaining professional relationships. They understand that conflict, when properly managed, leads to better decisions and deeper understanding.</p>

      <p>Constructive conflict requires:</p>
      <ul>
        <li>Clear separation of ideas from individuals</li>
        <li>Facilitation skills from the chair and senior directors</li>
        <li>Time allocated for genuine exploration and debate</li>
        <li>Commitment to finding the best answer, not winning arguments</li>
      </ul>

      <h2>Communication Patterns and Decision-Making</h2>
      <h3>Information Flow</h3>
      <p>How information moves through the board significantly impacts decision quality. Effective boards ensure:</p>
      <ul>
        <li>Information arrives with sufficient time for consideration</li>
        <li>Complex issues are presented in multiple formats</li>
        <li>Board members feel comfortable asking for clarification</li>
        <li>External perspectives are sought when needed</li>
      </ul>

      <h3>Deliberation Processes</h3>
      <p>The way boards discuss and analyze issues affects their decisions:</p>
      <ul>
        <li>Structured approaches to exploring options</li>
        <li>Devil's advocate assignments for major decisions</li>
        <li>Regular checking for understanding and agreement</li>
        <li>Clear documentation of reasoning and trade-offs</li>
      </ul>

      <h3>Consensus Building</h3>
      <p>Building genuine consensus rather than apparent agreement:</p>
      <ul>
        <li>Explicit testing for understanding and agreement</li>
        <li>Private polling on controversial issues</li>
        <li>Time for reflection between discussion and decision</li>
        <li>Clear processes for handling continued disagreement</li>
      </ul>

      <blockquote>
        "The most dangerous boards are those where everyone agrees too easily. Effective governance requires the creative tension that comes from diverse perspectives thoughtfully considered."
      </blockquote>

      <h2>Leadership Dynamics</h2>
      <h3>The Chair's Role</h3>
      <p>The board chair significantly shapes interpersonal dynamics through:</p>
      <ul>
        <li>Setting the tone for discussion and debate</li>
        <li>Managing power dynamics and speaking opportunities</li>
        <li>Protecting psychological safety and constructive conflict</li>
        <li>Modeling vulnerability and learning orientation</li>
      </ul>

      <h3>Lead Director Dynamics</h3>
      <p>In boards with separate CEO and chair roles, the lead director must:</p>
      <ul>
        <li>Facilitate communication between CEO and independent directors</li>
        <li>Ensure independent directors' voices are heard</li>
        <li>Manage relationship dynamics during challenging discussions</li>
        <li>Provide coaching and support to other directors</li>
      </ul>

      <h2>Managing Common Dysfunctional Dynamics</h2>
      <h3>Groupthink</h3>
      <p>Preventing premature consensus:</p>
      <ul>
        <li>Structured dissent processes</li>
        <li>External challenge and perspective</li>
        <li>Anonymous polling and feedback</li>
        <li>Culture that values critical thinking</li>
      </ul>

      <h3>Power Dynamics</h3>
      <p>Managing influence and authority:</p>
      <ul>
        <li>Equal speaking time and opportunity</li>
        <li>Separation of expertise from hierarchy</li>
        <li>Protection for less dominant voices</li>
        <li>Clear decision-making authority</li>
      </ul>

      <h3>Personal Conflicts</h3>
      <p>Addressing interpersonal tensions:</p>
      <ul>
        <li>Early identification and intervention</li>
        <li>Private discussion and mediation</li>
        <li>Focus on board effectiveness over individual preferences</li>
        <li>Clear boundaries and professional norms</li>
      </ul>

      <h2>Building Better Board Dynamics</h2>
      <h3>Board Assessment</h3>
      <p>Regular evaluation of interpersonal dynamics:</p>
      <ul>
        <li>360-degree feedback processes</li>
        <li>Observation and facilitation by external experts</li>
        <li>Structured reflection on communication patterns</li>
        <li>Survey tools for psychological safety and trust</li>
      </ul>

      <h3>Development Activities</h3>
      <p>Intentional improvement of dynamics:</p>
      <ul>
        <li>Board retreats focused on relationships and processes</li>
        <li>Training in facilitation and communication skills</li>
        <li>Simulation exercises and decision-making practice</li>
        <li>Coaching for chairs and senior directors</li>
      </ul>

      <h3>Structural Supports</h3>
      <p>Organizational elements that support good dynamics:</p>
      <ul>
        <li>Adequate meeting time for real discussion</li>
        <li>Information processes that enable preparation</li>
        <li>Committee structures that support effective deliberation</li>
        <li>Clear roles and responsibilities</li>
      </ul>

      <h2>The Path Forward</h2>
      <p>Building effective board dynamics is ongoing work that requires attention, intention, and practice. The boards that excel recognize that governance is fundamentally about human relationships and communication.</p>

      <p>By focusing on creating the right interpersonal dynamics, boards can unlock their full potential and provide the strategic guidance that organizations need in complex times.</p>

      <p>At The Way Forward, we help boards develop these capabilities through facilitated assessments, coaching, and structured development activities that improve both the quality and effectiveness of governance.</p>
    `
  },
  "stakeholder-engagement-strategies": {
    title: "Effective Stakeholder Engagement Strategies",
    category: "Leadership",
    date: "October 1, 2024",
    readTime: "5 min read",
    author: {
      name: "Simon Waller",
      role: "Principal Advisor",
      image: "/image/simon waller.jpg"
    },
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600",
    excerpt: "Building meaningful relationships with stakeholders to drive organizational success and sustainable outcomes.",
    content: `
      <p class="lead">Effective stakeholder engagement is no longer optional—it's a strategic imperative. Organizations that excel at building and maintaining stakeholder relationships consistently outperform those that don't.</p>

      <h2>Understanding Stakeholder Engagement</h2>
      <p>Stakeholder engagement goes beyond communication. It's about building genuine relationships, understanding diverse perspectives, and creating shared value. The most successful organizations treat stakeholder engagement as a core competency, not an afterthought.</p>

      <p>In today's interconnected world, stakeholders have more power and voice than ever before. Social media, regulatory scrutiny, and increased transparency mean that organizations must be proactive in managing these relationships.</p>

      <h2>Key Principles of Effective Engagement</h2>

      <h3>1. Identify and Prioritize Stakeholders</h3>
      <p>Not all stakeholders are equal. Effective engagement starts with understanding who your stakeholders are, what they care about, and how much influence they have over your organization's success. This requires systematic stakeholder mapping and analysis.</p>

      <h3>2. Listen Before Speaking</h3>
      <p>Too often, organizations approach stakeholder engagement as a one-way communication exercise. The most effective engagement starts with genuine listening—understanding stakeholder concerns, expectations, and aspirations before trying to influence their views.</p>

      <h3>3. Be Transparent and Authentic</h3>
      <p>Trust is the foundation of effective stakeholder relationships. This requires transparency about your organization's intentions, challenges, and limitations. Stakeholders can spot inauthenticity quickly, and the damage to trust can be lasting.</p>

      <blockquote>
        "The best stakeholder relationships are built on mutual understanding and shared purpose, not just strategic communication."
      </blockquote>

      <h2>Building a Stakeholder Engagement Strategy</h2>

      <h3>Step 1: Stakeholder Mapping</h3>
      <p>Create a comprehensive map of your stakeholders, including their interests, influence, and current relationship quality. This provides the foundation for targeted engagement strategies.</p>

      <h3>Step 2: Define Engagement Objectives</h3>
      <p>What do you want to achieve through stakeholder engagement? Objectives might include building support for initiatives, gathering input for decisions, managing risks, or creating partnerships.</p>

      <h3>Step 3: Design Engagement Approaches</h3>
      <p>Different stakeholders require different engagement approaches. Some may need regular formal meetings, while others might prefer informal conversations or digital engagement.</p>

      <h3>Step 4: Implement and Monitor</h3>
      <p>Execute your engagement strategy while continuously monitoring relationship quality and adjusting your approach based on feedback and results.</p>

      <h2>Common Engagement Challenges</h2>
      <ul>
        <li><strong>Conflicting stakeholder interests</strong> - Different stakeholders often have competing priorities that need to be balanced</li>
        <li><strong>Resource constraints</strong> - Meaningful engagement requires time and resources that may be limited</li>
        <li><strong>Measuring effectiveness</strong> - The impact of stakeholder engagement can be difficult to quantify</li>
        <li><strong>Maintaining consistency</strong> - Engagement needs to be sustained over time, not just during crises</li>
      </ul>

      <h2>The Path Forward</h2>
      <p>Organizations that invest in stakeholder engagement capabilities build resilience, reduce risk, and create opportunities for collaboration and innovation. In an increasingly complex and interconnected world, these capabilities are essential for long-term success.</p>

      <p>At The Way Forward, we help organizations develop stakeholder engagement strategies that build trust, create value, and support sustainable outcomes.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-500 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <span className="inline-block bg-navy text-white px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-3">
                <img 
                  src={post.author.image} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-heading prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-navy prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-blockquote:border-l-4 prose-blockquote:border-navy prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:text-slate-700
              prose-ul:space-y-2 prose-li:text-slate-600
              [&_.lead]:text-xl [&_.lead]:text-slate-700 [&_.lead]:leading-relaxed [&_.lead]:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-slate-500 font-medium">Share this article</span>
                <div className="flex gap-2">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-navy hover:text-white flex items-center justify-center transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-navy hover:text-white flex items-center justify-center transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <Link to="/contact">
                <Button className="!bg-navy hover:!bg-navy-800">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Related Articles
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Continue exploring insights on strategic foresight, governance, and leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {(() => {
              // Get related articles (different from current, same category preferred)
              const currentSlug = slug;
              const currentCategory = post.category;
              const allSlugs = Object.keys(blogPosts);
              
              // Filter out current article and prioritize same category
              const otherArticles = allSlugs
                .filter(s => s !== currentSlug)
                .map(s => ({ slug: s, ...blogPosts[s] }));
              
              const sameCategoryArticles = otherArticles.filter(a => a.category === currentCategory);
              const differentCategoryArticles = otherArticles.filter(a => a.category !== currentCategory);
              
              // Get up to 3 articles, prioritizing same category
              const relatedArticles = [...sameCategoryArticles, ...differentCategoryArticles].slice(0, 3);
              
              return relatedArticles.map((article, i) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <Link to={`/blog/${article.slug}`} className="block">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      {/* Full-bleed background image */}
                      <img 
                        src={article.heroImage} 
                        alt={article.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark gradient overlay - from top */}
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/70 to-slate-900/20"></div>
                      
                      {/* Content at top */}
                      <div className="absolute top-0 left-0 right-0 p-6">
                        {/* Category tag */}
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider mb-4">
                          {article.category}
                        </span>
                        
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4 leading-[1.1] line-clamp-3 group-hover:text-slate-300 transition-colors">
                          {article.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      
                      {/* Author at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img 
                              src={article.author.image} 
                              alt={article.author.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                            />
                            <div>
                              <p className="text-white text-sm font-medium">{article.author.name}</p>
                              <p className="text-white/60 text-xs">{article.date} · {article.readTime}</p>
                            </div>
                          </div>
                          
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-all">
                            <ArrowRight className="w-4 h-4 text-white group-hover:text-navy transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ));
            })()}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="!border-slate-300 hover:!bg-slate-100">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
