import Head from 'next/head';
import { FC } from 'react';

// Hero Section Component
const HeroSection: FC = () => (
  <section style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', color: 'white', padding: '50px', textAlign: 'center' }}>
    <h1>Setting the Gold Standard in DeFi Innovation</h1>
    <h2>Qualified Developers, Established Business Owners, and Creatives Leading the Way</h2>
    <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Join Us Today</button>
  </section>
);

// About Us Section Component
const AboutUs: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>About Us</h1>
    <p>Gold Meta DAO is at the forefront of DeFi innovation, bringing together expertise from developers, business leaders, and creative minds to create revolutionary solutions in the decentralized finance space.</p>
    <h2>Mission Statement</h2>
    <p>Our mission is to redefine the standards of DeFi by prioritizing integrity, efficiency, and groundbreaking innovation. We are committed to shaping the future of financial systems with transparency and excellence.</p>
    <h2>Team</h2>
    <ul>
      <li>John Smith - CEO</li>
      <li>Jane Doe - Lead Developer</li>
      <li>Alice Johnson - Business Strategist</li>
    </ul>
    <h2>Goals</h2>
    <p>Our long-term objectives include expanding our DeFi solutions, fostering partnerships, and continuously pushing the boundaries of financial technology.</p>
  </section>
);

// Services Section Component
const Services: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Services</h1>
    <h2>Consultation Services</h2>
    <p>We offer expert consultation services to help you navigate the complexities of DeFi. Our team provides strategic advice, technical support, and tailored solutions.</p>
    <h2>Partnership Opportunities</h2>
    <p>Become a partner with Gold Meta DAO to leverage our expertise and resources. We collaborate with innovators to drive mutual growth and success.</p>
  </section>
);

// Cryptocurrency Liquidity Pool Section Component
const LiquidityPool: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Cryptocurrency Liquidity Pool</h1>
    <p>Our cryptocurrency liquidity pool offers an exceptional investment opportunity with competitive returns. By participating, you contribute to the liquidity and stability of the ecosystem.</p>
    <h2>Benefits</h2>
    <p>Earn up to 130% APR, benefit from high liquidity, and enjoy the stability of our well-structured pool.</p>
    <h2>How It Works</h2>
    <p>Participate by providing liquidity to our pool. Your assets will help facilitate transactions and, in return, you’ll earn rewards based on your contribution.</p>
    <h2>Testimonials</h2>
    <blockquote>"Gold Meta DAO’s liquidity pool has been a game-changer for my investments." - Investor A</blockquote>
    <blockquote>"The returns and stability are unmatched in the DeFi space." - Investor B</blockquote>
  </section>
);

// Why Solana Section Component
const WhySolana: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Why Solana?</h1>
    <h2>Blockchain Technology</h2>
    <p>Solana is renowned for its high-speed transactions and low fees. It offers a scalable and efficient blockchain solution ideal for DeFi applications.</p>
    <h2>Performance</h2>
    <p>Solana boasts a throughput of thousands of transactions per second and sub-second finality, making it one of the most performant blockchains available.</p>
    <h2>Community</h2>
    <p>With a rapidly growing and engaged community, Solana is at the cutting edge of blockchain innovation, fostering a vibrant ecosystem of developers and users.</p>
  </section>
);

// Roadmap Section Component
const Roadmap: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Roadmap</h1>
    <h2>Phases</h2>
    <ul>
      <li>Phase 1: Initial Development - Building core infrastructure and forming partnerships.</li>
      <li>Phase 2: Launch - Introducing main services and expanding the user base.</li>
      <li>Phase 3: Expansion - Enhancing features, scaling operations, and global outreach.</li>
    </ul>
    <h2>Timeline</h2>
    <p>Include a visual timeline with milestones for each phase.</p>
    <h2>Goals</h2>
    <ul>
      <li>Short-Term: Successful launch of core services and initial partnerships.</li>
      <li>Long-Term: Global expansion, continuous innovation, and leadership in DeFi.</li>
    </ul>
  </section>
);

// News and Updates Section Component
const NewsUpdates: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>News and Updates</h1>
    <h2>Blog</h2>
    <p>Stay updated with the latest articles on DeFi trends, Gold Meta DAO developments, and industry insights.</p>
    <h2>Press Releases</h2>
    <p>Read our official announcements and media coverage for recent news and significant updates.</p>
    <h2>Events</h2>
    <p>Join us at upcoming industry conferences and events where we’ll share insights and network with the DeFi community.</p>
  </section>
);

// Contact Us Section Component
const ContactUs: FC = () => (
  <section style={{ padding: '50px', textAlign: 'center' }}>
    <h1>Contact Us</h1>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Subject:
        <input type="text" name="subject" />
      </label>
      <label>
        Message:
        <textarea name="message" />
      </label>
      <button type="submit">Send</button>
    </form>
    <h2>Details</h2>
    <p>Email: <a href="mailto:contact@goldmetadao.com">contact@goldmetadao.com</a></p>
    <p>Phone Number: +1 (555) 123-4567</p>
    <p>Office Address: 123 Innovation Drive, Tech City, CA 90210, USA</p>
    <h2>Social Media</h2>
    <a href="#">Twitter</a> | <a href="#">LinkedIn</a> | <a href="#">Facebook</a>
  </section>
);

// Footer Component
const Footer: FC = () => (
  <footer style={{ padding: '20px', textAlign: 'center', background: '#f1f1f1' }}>
    <nav>
      <a href="#">Home</a> | <a href="#">About Us</a> | <a href="#">Services</a> | <a href="#">Cryptocurrency Liquidity Pool</a> | <a href="#">Why Solana?</a> | <a href="#">Roadmap</a> | <a href="#">News and Updates</a> | <a href="#">Contact Us</a>
    </nav>
    <p>
      <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Disclaimers</a>
    </p>
    <form>
      <label>
        Subscribe to our newsletter:
        <input type="email" name="newsletter" />
      </label>
      <button type="submit">Subscribe</button>
    </form>
  </footer>
);

const Home: FC = () => (
  <>
    <Head>
      <title>Gold Meta DAO</title>
      <meta name="description" content="Gold Meta DAO - Leading the way in DeFi innovation." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HeroSection />
      <AboutUs />
      <Services />
      <LiquidityPool />
      <WhySolana />
      <Roadmap />
      <NewsUpdates />
      <ContactUs />
    </main>
    <Footer />
  </>
);

export default Home;