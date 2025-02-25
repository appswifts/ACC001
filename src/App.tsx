import { Routes, Route } from 'react-router-dom';
import { Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Main Pages
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard';
import SkilledWorkerListing from './pages/SkilledWorkerListing';
import SkilledWorkerProfile from './pages/SkilledWorkerProfile';
import Booking from './pages/Booking';
import SearchFilter from './pages/SearchFilter';
import ServiceListing from './pages/ServiceListing';
import PaymentCheckout from './pages/PaymentCheckout';
import OrderConfirmation from './pages/OrderConfirmation';
import MessageSystem from './pages/MessageSystem';
import ReviewRating from './pages/ReviewRating';
import TravelItinerary from './pages/TravelItinerary';
import CustomTripPlanner from './pages/CustomTripPlanner';
import BookingHistory from './pages/BookingHistory';
import ProviderRegistration from './pages/ProviderRegistration';
import TravelerRegistration from './pages/TravelerRegistration';
import ProfileManagement from './pages/ProfileManagement';
import SubscriptionPayment from './pages/SubscriptionPayment';
import BusinessGrowth from './pages/BusinessGrowth';
import EventListings from './pages/EventListings';
import ProviderProfile from './pages/ProviderProfile';
import ServiceManagement from './pages/ServiceManagement';
import POSManagement from './pages/POSManagement';
import HelpSupport from './pages/HelpSupport';
import FAQ from './pages/FAQ';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CancellationRefund from './pages/CancellationRefund';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ProviderApplication from './pages/ProviderApplication';
import SkilledWorkerBooking from './pages/SkilledWorkerBooking';
import AdminPanel from './pages/AdminPanel';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <Globe2 size={24} className="text-[#0031E8]" />
                <span className="text-xl font-semibold text-gray-900">Irugoo</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/skilled-workers" element={<SkilledWorkerListing />} />
          <Route path="/skilled-worker/:id" element={<SkilledWorkerProfile />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/services" element={<ServiceListing />} />
          <Route path="/checkout" element={<PaymentCheckout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/messages" element={<MessageSystem />} />
          <Route path="/reviews" element={<ReviewRating />} />
          <Route path="/itinerary" element={<TravelItinerary />} />
          <Route path="/trip-planner" element={<CustomTripPlanner />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/provider-registration" element={<ProviderRegistration />} />
          <Route path="/traveler-registration" element={<TravelerRegistration />} />
          <Route path="/profile" element={<ProfileManagement />} />
          <Route path="/subscription" element={<SubscriptionPayment />} />
          <Route path="/business-growth" element={<BusinessGrowth />} />
          <Route path="/events" element={<EventListings />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
          <Route path="/service-management" element={<ServiceManagement />} />
          <Route path="/pos" element={<POSManagement />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cancellation" element={<CancellationRefund />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/provider-application" element={<ProviderApplication />} />
          <Route path="/skilled-worker-booking" element={<SkilledWorkerBooking />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;