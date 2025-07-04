import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

interface FooterNavigationProps {
  onNavigate: (path: string) => void;
}

const FooterNavigation = ({ onNavigate }: FooterNavigationProps) => {
  const [location] = useLocation();
  const { isAdmin } = useAuth();
  
  return (
    <footer className="bg-white shadow-md border-t border-gray-200 mt-6">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-around">
          <button 
            className={`text-center p-2 rounded-md ${location === '/' ? 'text-primary' : 'text-gray-600'}`}
            onClick={() => onNavigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs">Home</span>
          </button>
          
          <button 
            className={`text-center p-2 rounded-md ${location.startsWith('/teams') ? 'text-primary' : 'text-gray-600'}`}
            onClick={() => onNavigate(isAdmin ? '/admin/players' : '/teams')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs">Teams</span>
          </button>
          
          <button 
            className={`text-center p-2 rounded-md ${location.startsWith('/history') ? 'text-primary' : 'text-gray-600'}`}
            onClick={() => onNavigate('/history')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">History</span>
          </button>

          <button 
            className={`text-center p-2 rounded-md ${location.startsWith('/sportsbook') ? 'text-primary' : 'text-gray-600'}`}
            onClick={() => onNavigate('/sportsbook')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">Sportsbook</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;
