import React from 'react';

const articles = [
  {
    id: 1,
    title: "How to Invest in Stocks",
    image: "https://via.placeholder.com/150",
    content: " Investing in stocks is an essential aspect of building wealth over the long term, but for beginners, it can feel overwhelming. Understanding the fundamentals is crucial. Stocks represent ownership in companies, and the stock market is wheretools. Develop an investment strategy based on your risk tolerance and investment timeline. Regularly monitor your investments and stay informed about market trends and company news. Patience and discipline are essential. The stock market can be volatile, but avoid making impulsive decisions based on short-term fluctuations. Stick to your investment strategy and focus on your long-term goals",
  },
  {
    id: 2,
    title: "Understanding Cryptocurrency",
    image: "https://via.placeholder.com/150",
    content: "Cryptocurrency is digital money secured by cryptography and operates on decentralized networks like blockchain. Bitcoin, the first cryptocurrency, was created in 2009, spawning thousands of others known as altcoins. While offering benefits like fast transactions and privacy, cryptocurrencies are volatile and susceptible to security breaches. Buying, selling, and trading occurs on online exchanges or peer-to-peer platforms. Regulatory uncertainty adds to the risk. Yet, cryptocurrencies represent innovative solutions to traditional finance. Educating oneself about their technology and risks is crucial for navigating this dynamic and evolving landscape",
  },
  {
    id: 3,
    title: "Real Estate Investment Strategies",
    image: "https://via.placeholder.com/150",
    content: "Real estate investment involves various strategies for generating income and building wealth through property ownership. Traditional methods include rental properties, where income is generated through leasing to tenants, and property appreciation over time. Fix-and-flip involves buying undervalued properties, renovating them, and selling at a profit. Real estate investment trusts (REITs) allow investors to buy shares in real estate portfolios, providing passive income and diversification. Crowdfunding platforms enable investors to pool funds for real estate projects. Each strategy has its risks and rewards, requiring thorough research and understanding of market trends. Real estate offers stability and long-term growth potential for savvy investors",
  },
  {
    id: 4,
    title: "The Basics of Personal Finance",
    image: "https://via.placeholder.com/150",
    content: "Personal finance is the management of individual financial decisions and activities. It encompasses budgeting, saving, investing, and debt management. Budgeting involves tracking income and expenses to create a spending plan. Saving entails setting aside money for emergencies and future goals. Investing involves putting money into assets like stocks, bonds, and real estate to grow wealth over time. Debt management focuses on reducing and managing debt effectively. Other aspects include insurance coverage for protection against unforeseen events and retirement planning for long-term financial security. Understanding these basics is crucial for building a strong financial foundation and achieving financial freedom.",
  },
];

const Blogs = () => {
  return (
    <div className="bg-blue-500 min-h-screen">
      <nav className="bg-blue-700 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl font-bold">Financial Articles</h1>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={article.image} alt={article.title} className="w-full h-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-blue-700 py-4 mt-8">
        <div className="container mx-auto px-4">
          <p className="text-white text-center">&copy; 2024 Financial Blog</p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;