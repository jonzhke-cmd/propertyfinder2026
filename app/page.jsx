// app/page.jsx (or pages/index.jsx for Pages Router)
import Header from './components/Header';
import Hero from './components/Hero';
import ListingCard from './components/ListingCard';
// import { motion } from 'framer-motion'; // Uncomment and use for Framer Motion animations

export default function HomePage() {
  // Mock data for listings - in a real app, this would come from an API or Firestore
  const listings = [
    {
      id: '1',
      image: 'https://via.placeholder.com/600x400?text=Luxury+Condo+1',
      title: 'Luxury Condo @ Orchard Road',
      price: 3500000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1800,
      verified: true,
      agentImage: 'https://via.placeholder.com/40/FF0000/FFFFFF?text=AG1'
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/600x400?text=HDB+Flat+Tampines',
      title: 'Spacious HDB Flat in Tampines',
      price: 650000,
      bedrooms: 4,
      bathrooms: 2,
      area: 1200,
      verified: false,
      agentImage: 'https://via.placeholder.com/40/0000FF/FFFFFF?text=AG2'
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/600x400?text=New+Launch+Project',
      title: 'The Grand Residences - New Launch',
      price: 2800000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1000,
      verified: true,
      agentImage: 'https://via.placeholder.com/40/00FF00/FFFFFF?text=AG3'
    },
    {
        id: '4',
        image: 'https://via.placeholder.com/600x400?text=Penthouse+Sentosa',
        title: 'Exclusive Sentosa Cove Penthouse',
        price: 8500000,
        bedrooms: 5,
        bathrooms: 5,
        area: 4500,
        verified: true,
        agentImage: 'https://via.placeholder.com/40/FFFF00/000000?text=AG4'
      },
      {
        id: '5',
        image: 'https://via.placeholder.com/600x400?text=Bungalow+Holland',
        title: 'Charming Bungalow in Holland Village',
        price: 7200000,
        bedrooms: 6,
        bathrooms: 4,
        area: 5000,
        verified: false,
        agentImage: 'https://via.placeholder.com/40/FF00FF/FFFFFF?text=AG5'
      },
      {
        id: '6',
        image: 'https://via.placeholder.com/600x400?text=Condo+River+Valley',
        title: 'Modern Condo near River Valley',
        price: 2100000,
        bedrooms: 2,
        bathrooms: 2,
        area: 950,
        verified: true,
        agentImage: 'https://via.placeholder.com/40/00FFFF/000000?text=AG6'
      }
  ];

  // const sectionVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Featured Projects Section */}
        {/* <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="container mx-auto px-4 py-12"
        > */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(0, 3).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
        {/* </motion.section> */}

        {/* Latest Listings Section */}
        {/* <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="container mx-auto px-4 py-12"
        > */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.slice(3, 6).map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
        {/* </motion.section> */}
      </main>

      {/* Footer can go here */}
      <footer className="bg-gray-800 text-white p-8 text-center">
        <p>&copy; 2026 PropertyFinder. All rights reserved.</p>
      </footer>
    </div>
  );
}
